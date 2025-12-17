import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Software Engineering Specialist",
        company: "Accenture",
        period: "2024 - Present",
        description: [
            "Writing secure, high-quality code in Java, adhering to SOLID principles and design patterns.",
            "Developing and documenting RESTful APIs using Spring Boot.",
            "Optimized API performance by implementing caching and refining database queries, reducing response times by over 20%.",
            "Leading code reviews and mentoring junior developers, increasing team productivity by 15%."
        ],
        color: "from-purple-500 to-violet-600"
    },
    {
        id: 2,
        role: "Consultant",
        company: "Capgemini",
        period: "2022 - 2024",
        description: [
            "Developed and debugged PL/SQL packages, procedures, functions, and triggers in Oracle RDBMS.",
            "Implemented REST APIs for seamless component communication.",
            "Led agile backend development teams to ensure timely delivery of work orders.",
            "Optimized batch processing time by 20% through performance tuning."
        ],
        color: "from-blue-500 to-cyan-600"
    },
    {
        id: 3,
        role: "Business Technology Analyst",
        company: "Deloitte",
        period: "2017 - 2019",
        description: [
            "Applied automation to reduce manual toil in SDLC using Java, Python, and SQL.",
            "Collaborated with performance testing teams to reduce testing time by 20-30%.",
            "Developed and tested internal REST APIs with Postman and JUnit.",
            "Fixed 50+ software bugs resulting in 30% error reduction."
        ],
        color: "from-green-500 to-emerald-600"
    }
];

const Experience = () => {
    return (
        <section id="work" className="py-10 md:py-16 relative">
            {/* Wave-form gradient accent */}
            <div className="absolute -top-10 -left-40 w-[1100px] h-[280px] bg-violet-600/10 blur-[130px] rounded-[100%] rotate-[-12deg] pointer-events-none" />

            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 relative z-10"
            >
                <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Career Journey</span>
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
                    Work Experience
                </h2>
            </motion.div>

            <div className="flex flex-col gap-0 relative z-10">
                {/* Timeline line */}
                <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent hidden md:block" />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative"
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-3 md:left-4 top-2 hidden md:flex">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-[#0a0a0b] shadow-lg`} />
                        </div>

                        <div className="md:ml-14 p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(168,85,247,0.15)] mb-6">
                            {/* Header Row */}
                            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-5">
                                {/* Company Pill */}
                                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-semibold w-fit shadow-lg`}>
                                    <Briefcase size={14} />
                                    {exp.company}
                                </span>

                                {/* Role */}
                                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight flex-1 group-hover:text-purple-200 transition-colors">
                                    {exp.role}
                                </h3>

                                {/* Date */}
                                <span className="text-gray-500 text-sm font-medium whitespace-nowrap bg-white/5 px-4 py-1.5 rounded-full">
                                    {exp.period}
                                </span>
                            </div>

                            {/* Description List */}
                            <ul className="space-y-3">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        <span className="text-purple-400 mt-1.5 text-xs">●</span>
                                        <span className="text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

