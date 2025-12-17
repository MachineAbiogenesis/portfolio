import { motion } from 'framer-motion';
import {
    Code2,
    Layers,
    Globe,
    Database,
    Wrench,
    BrainCircuit,
} from 'lucide-react';

const skillCategories = [
    {
        name: "Programming Languages",
        icon: <Code2 className="w-5 h-5" />,
        color: "from-orange-500 to-amber-500",
        skills: ["Java", "Python", "SQL", "PL / SQL"]
    },
    {
        name: "Frameworks & Libraries",
        icon: <Layers className="w-5 h-5" />,
        color: "from-green-500 to-emerald-500",
        skills: ["Spring Boot", "Spring", "Hibernate"]
    },
    {
        name: "Databases & Cloud Platforms",
        icon: <Database className="w-5 h-5" />,
        color: "from-red-500 to-rose-500",
        skills: ["Oracle", "PostgreSQL", "AWS", "Microsoft Azure"]
    },
    {
        name: "Web Services & APIs",
        icon: <Globe className="w-5 h-5" />,
        color: "from-blue-500 to-cyan-500",
        skills: ["RESTful APIs", "JSON", "JWT", "OAuth 2.0", "Swagger"]
    },
    {
        name: "Development Tools",
        icon: <Wrench className="w-5 h-5" />,
        color: "from-gray-500 to-slate-500",
        skills: ["Eclipse", "Git", "TortoiseSVN", "JIRA", "SonarQube", "SQL Management Studio"]
    },
    {
        name: "Machine Learning & AI",
        icon: <BrainCircuit className="w-5 h-5" />,
        color: "from-purple-500 to-violet-500",
        skills: ["TensorFlow", "PyTorch", "Keras", "NumPy", "Scikit-Learn", "AI"]
    },
];

const About = () => {
    return (
        <section id="about" className="py-10 md:py-16 relative">
            {/* Background accent */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Skills Section */}
            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">What I Do</span>
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
                        Skills & Expertise
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-300"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-base font-semibold text-white">{category.name}</h3>
                            </div>

                            {/* Skills Pills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/[0.05] border border-white/[0.08] rounded-full hover:bg-white/[0.1] hover:border-purple-500/30 transition-all duration-200"
                                    >
                                        {skill}
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

export default About;
