import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-40 relative overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/15 blur-[150px] rounded-full animate-glow" />
            </div>

            {/* Decorative border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            <div className="flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
                        <Sparkles className="w-4 h-4" />
                        Available for opportunities
                    </div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">Let's work</span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">together.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
                    </p>

                    <a
                        href="mailto:niraj.aher@gmail.com"
                        className="group inline-flex items-center gap-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-[0_15px_40px_-15px_rgba(168,85,247,0.5)] transition-all duration-300 hover:-translate-y-1"
                    >
                        <Mail size={22} />
                        Get in touch
                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

