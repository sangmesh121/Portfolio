import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Github size={20} />, href: 'https://github.com/sangmesh121', label: 'GitHub' },
        { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/sangmesh121', label: 'LinkedIn' },
        { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
        { icon: <Mail size={20} />, href: 'mailto:sangmesh.developer@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Sangmesh.dev
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">
                            Building modern web experiences with precision and passion.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center text-slate-500 dark:text-slate-400 text-sm">
                    <p>© {new Date().getFullYear()} Sangmesh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
