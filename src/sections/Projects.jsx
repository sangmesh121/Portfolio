import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Loader2 } from 'lucide-react';
import { projects as localProjects } from '../data/projects';
import { useGithubProjects } from '../hooks/useGithubProjects';

const Projects = () => {
    const { repos: githubProjects, loading, error } = useGithubProjects('sangmesh121');

    // Combine local and GitHub projects, avoiding duplicates if any
    const allProjects = [...localProjects];

    if (!loading && !error && githubProjects.length > 0) {
        githubProjects.forEach(repo => {
            // Basic duplicate check by checking if the GitHub URL suffix (repo name) exists in any local project URL
            const repoName = repo.github.split('/').pop().toLowerCase();
            if (!allProjects.some(p => p.github.toLowerCase().includes(repoName))) {
                allProjects.push(repo);
            }
        });
    }

    return (
        <section id="projects" className="py-24 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {loading && (
                    <div className="flex flex-col items-center justify-center py-12">
                        <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
                        <p className="text-slate-500">Fetching latest projects from GitHub...</p>
                    </div>
                )}

                {error && (
                    <div className="text-center py-8 text-red-500">
                        <p>Note: Could not fetch latest GitHub projects. Showing local projects only.</p>
                    </div>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allProjects.map((project, index) => (
                        <motion.div
                            key={project.title + index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700 flex flex-col h-full group"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
                                    >
                                        <Github size={24} />
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
                                        >
                                            <ExternalLink size={24} />
                                        </a>
                                    )}
                                </div>
                                <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform duration-500">
                                    <span className="text-4xl font-bold opacity-20 uppercase">{project.techStack[0]}</span>
                                </div>
                                {project.status && (
                                    <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg">
                                        {project.status}
                                    </span>
                                )}
                                {(project.stars > 0 || project.forks > 0) && (
                                    <div className="absolute bottom-4 right-4 flex space-x-3 z-20">
                                        {project.stars > 0 && (
                                            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md">
                                                <Star size={10} className="text-yellow-400" />
                                                <span>{project.stars}</span>
                                            </div>
                                        )}
                                        {project.forks > 0 && (
                                            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md">
                                                <GitFork size={10} className="text-blue-400" />
                                                <span>{project.forks}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1 text-xs font-medium transition-colors"
                                    >
                                        <Github size={14} />
                                        <span>View on GitHub</span>
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1 text-xs font-medium transition-colors"
                                        >
                                            <span>Live Demo</span>
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
