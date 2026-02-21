import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Licenses & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between group"
                        >
                            <div className="flex items-center space-x-6">
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium">{cert.issuer}</p>
                                </div>
                            </div>

                            <div className="mt-4 md:mt-0 flex items-center space-x-6">
                                <div className="flex items-center text-slate-400 text-sm">
                                    <Calendar size={16} className="mr-2" />
                                    <span>{cert.date}</span>
                                </div>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
