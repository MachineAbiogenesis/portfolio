import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Text Emotion Recognition",
        category: "Machine Learning / NLP",
        description: "An advanced NLP model capable of detecting and classifying human emotions from textual data with high accuracy.",
        tech: ["Python", "TensorFlow", "NLP", "Numpy", "Pandas", "Scikit-learn"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/MachineAbiogenesis/MachineLearning/blob/main/Text_Emotion_Recognition.ipynb",
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-10 md:py-16 relative">
            {/* Wave-form gradient accent */}
            <div className="absolute bottom-0 -right-60 w-[1200px] h-[300px] bg-indigo-600/10 blur-[140px] rounded-[100%] rotate-[-10deg] pointer-events-none" />

            <div className="flex flex-col gap-10 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-4"
                >
                    <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Featured Work</span>
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
                        Personal Projects
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center group cursor-pointer"
                        >
                            {/* Left Column: Text Content */}
                            <div className="flex flex-col justify-center order-2 lg:order-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles className="w-4 h-4 text-purple-400" />
                                    <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-purple-100 transition-colors leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                                    {project.description}
                                </p>

                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-full font-bold hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.5)] transition-all transform group-hover:translate-x-1 w-fit"
                                >
                                    View Project
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Right Column: Image */}
                            <div className="relative aspect-video w-full rounded-3xl overflow-hidden order-1 lg:order-2 group/image">
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-violet-900/30 z-10 group-hover/image:opacity-50 transition-opacity duration-500" />

                                {/* Glow effect on hover */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="relative w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105 brightness-90 group-hover:brightness-100"
                                />

                                {/* Corner accent */}
                                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-purple-400/50 rounded-tr-2xl z-20" />
                                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-purple-400/50 rounded-bl-2xl z-20" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

