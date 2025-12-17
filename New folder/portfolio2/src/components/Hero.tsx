import { motion } from 'framer-motion';
import capgeminiSpade from '../assets/capgemini-spade.png';

const companies = [
    { name: "accenture", font: "font-sans font-bold tracking-tighter lowercase", hasDot: false },
    { name: "Capgemini", font: "font-['Kaushan_Script'] font-bold tracking-wide", hasDot: false },
    { name: "Deloitte", font: "font-sans font-black tracking-wide", hasDot: true },

    { name: "accenture", font: "font-sans font-bold tracking-tighter lowercase", hasDot: false },
    { name: "Capgemini", font: "font-['Kaushan_Script'] font-bold tracking-wide", hasDot: false },
    { name: "Deloitte", font: "font-sans font-black tracking-wide", hasDot: true },

    { name: "accenture", font: "font-sans font-bold tracking-tighter lowercase", hasDot: false },
    { name: "Capgemini", font: "font-['Kaushan_Script'] font-bold tracking-wide", hasDot: false },
    { name: "Deloitte", font: "font-sans font-black tracking-wide", hasDot: true },
];

const Hero = () => {
    return (
        <section className="min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden pt-16">

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

            {/* Main Content - Centered */}
            <div className="flex-1 flex flex-col justify-center items-center z-10 max-w-5xl text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Greeting Tag */}
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-4 py-2 mb-6 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full"
                    >
                        👋 Software Engineer
                    </motion.span>

                    {/* Single Line Title */}
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8 font-inter">
                        <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">Niraj</span>{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">Aher.</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed mb-6 mx-auto">
                        Software Engineer with <span className="text-purple-400 font-medium">6+ years</span> of experience building scalable backend systems using
                        <span className="text-white font-medium"> Java</span>,
                        <span className="text-white font-medium"> Spring Boot</span>,
                        <span className="text-white font-medium"> Restful APIs</span>, and
                        <span className="text-white font-medium"> PL/SQL</span>.
                    </h2>
                </motion.div>
            </div>

            {/* Bottom Text Marquee */}
            <div className="w-full py-8 relative mt-auto mb-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                {/* Worked With Label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-xs md:text-sm text-gray-500 font-medium tracking-[0.3em] mb-10 uppercase"
                >
                    Worked With
                </motion.p>

                <motion.div
                    className="flex gap-20 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 35,
                        ease: "linear"
                    }}
                >
                    {companies.map((company, index) => (
                        <span
                            key={index}
                            className={`text-3xl md:text-4xl text-white/80 select-none ${company.font} flex items-center gap-3 hover:text-white transition-colors duration-300`}
                        >
                            {company.name}

                            {/* Capgemini Spade Image - Standard Render (assumed transparent) */}
                            {company.name === "Capgemini" && (
                                <img
                                    src={capgeminiSpade}
                                    alt="Capgemini"
                                    className="w-7 h-7 object-contain opacity-80"
                                />
                            )}

                            {company.hasDot && <span className="text-[#86BC25]">.</span>}
                            {company.name === "accenture" && <span className="text-purple-500 text-4xl leading-none ml-1">&gt;</span>}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

