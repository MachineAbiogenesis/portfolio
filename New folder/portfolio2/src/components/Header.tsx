import { useState, useEffect } from 'react';
import { Menu, X, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#about", label: "Skills" },
        { href: "#certifications", label: "Certifications" },
        { href: "#work", label: "Experience" },
        { href: "#projects", label: "Projects" },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/[0.05] py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex items-center justify-center relative">
                {/* Desktop Navigation - Center */}
                <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.08] rounded-full transition-all duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* LinkedIn Button - Right */}
                <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex absolute right-6 items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-sm font-medium rounded-full hover:shadow-[0_5px_20px_-5px_rgba(168,85,247,0.5)] transition-all duration-300"
                >
                    <Linkedin size={16} />
                    LinkedIn
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/[0.08] overflow-hidden"
                    >
                        <nav className="flex flex-col items-center gap-4 py-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-300 hover:text-purple-400 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            {/* Mobile LinkedIn Link */}
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 mt-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-medium rounded-full"
                                onClick={() => setIsOpen(false)}
                            >
                                <Linkedin size={18} />
                                LinkedIn Profile
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;


