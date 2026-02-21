import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                                Have a project in mind or want to discuss a potential collaboration? Feel free to reach out via any of the channels below or use the contact form.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</h4>
                                    <p className="text-lg font-semibold text-slate-900 dark:text-white">sangmesh.developer@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">LinkedIn</h4>
                                    <p className="text-lg font-semibold text-slate-900 dark:text-white">linkedin.com/in/sangmesh121</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</h4>
                                    <p className="text-lg font-semibold text-slate-900 dark:text-white">Solapur, Maharashtra</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all dark:text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all dark:text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all dark:text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all dark:text-white resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25"
                            >
                                <span>Send Message</span>
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
