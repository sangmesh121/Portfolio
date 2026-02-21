import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700 group"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
