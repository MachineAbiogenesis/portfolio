import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-10 border-t border-white/[0.06] bg-black/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{PERSONAL_INFO.role} based in {PERSONAL_INFO.location}</p>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                    <span>Built with</span>
                    <Heart className="w-4 h-4 text-purple-400 fill-purple-400 mx-1" />
                    <span>© {currentYear}</span>
                </div>

                <div className="flex gap-4">
                    <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
                        <Twitter size={18} />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
                        <Linkedin size={18} />
                    </a>
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
                        <Github size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


