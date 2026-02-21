import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '1+' },
        { label: 'Projects Completed', value: '10+' },
        { label: 'Happy Clients', value: '5+' },
        { label: 'Cups of Coffee', value: '500+' },
    ];

    return (
        <section id="about" className="py-24 px-6">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            About <span className="text-blue-600 dark:text-blue-400">Me</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>

                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            I am a dedicated Developer with a strong foundation in computer science and a passion for creating impactful digital solutions. My expertise spans from building robust web applications to implementing advanced machine learning algorithms.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                            I thrive on tackling complex challenges and constantly learning new technologies to deliver high-quality, scalable, and user-centric products.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, index) => (
                                <div key={stat.label}>
                                    <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
