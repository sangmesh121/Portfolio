import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 px-6 overflow-hidden">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm"
                    >
                        Welcome to my portfolio
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mt-4 mb-6 leading-tight"
                    >
                        Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sangmesh</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed"
                    >
                        A passionate Developer focused on building high-performance web applications and AI-driven solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <a
                            href="#projects"
                            className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25"
                        >
                            <span>View Projects</span>
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-full font-medium transition-all"
                        >
                            <Download size={20} />
                            <span>Download CV</span>
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative hidden md:block"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <div className="relative glass rounded-2xl p-4 overflow-hidden shadow-2xl">
                        {/* Replace with actual image later or leave as a stylized placeholder */}
                        <div className="h-[500px] w-full bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 overflow-hidden">
                            <img
                                src={profileImg}
                                alt="Sangmeshwar Dhole"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
