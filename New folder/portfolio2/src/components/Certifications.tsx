import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

const certifications = [
    {
        id: 5,
        title: "GitHub Copilot",
        issuer: "Microsoft",
        image: `${baseUrl}github-copilot.svg`,
        link: "https://learn.microsoft.com/en-us/users/nirajaher-5999/credentials/2f318dbce3976b07",
        color: "from-gray-700 to-gray-900"
    },
    {
        id: 1,
        title: "Azure Cloud Fundamentals",
        issuer: "Microsoft",
        image: `${baseUrl}microsoft-badge.svg`,
        link: "https://learn.microsoft.com/en-us/users/nirajaher-4121/credentials/1cb2f854f70dd2fa",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 4,
        title: "SQL Certificate",
        issuer: "HackerRank",
        image: `${baseUrl}sql-cert.png`,
        link: "https://www.hackerrank.com/certificates/139b0ee1cda1",
        color: "from-green-500 to-emerald-500"
    },
    {
        id: 3,
        title: "DeepLearning.AI Specialization",
        issuer: "Coursera",
        image: `${baseUrl}deeplearning-cert.png`,
        link: "https://www.coursera.org/account/accomplishments/professional-cert/94TJ6GX5TGZX",
        color: "from-blue-600 to-indigo-600"
    },
    {
        id: 2,
        title: "TensorFlow Developer",
        issuer: "Google",
        image: `${baseUrl}tensorflow-badge.png`,
        link: "https://www.credential.net/a4c26fca-e317-4d79-b4d8-697015233800",
        color: "from-orange-500 to-yellow-500"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-10 md:py-16 relative">
            {/* Wave-form gradient accent */}
            <div className="absolute top-0 -right-40 w-[1000px] h-[250px] bg-purple-600/10 blur-[120px] rounded-[100%] rotate-[8deg] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 relative z-10"
            >
                <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Credentials</span>
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
                    Certifications
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
                {certifications.map((cert, index) => (
                    <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(168,85,247,0.25)] hover:-translate-y-2"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Image Container */}
                        <div className="absolute inset-x-0 top-0 h-[55%] p-6 flex items-center justify-center">
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Glow behind image */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} blur-3xl rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    loading="lazy"
                                    className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-center text-center">
                            <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">
                                <Award size={14} />
                                <span className="text-xs font-bold tracking-wider uppercase">{cert.issuer}</span>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-purple-100 transition-colors">
                                {cert.title}
                            </h3>

                            <span className="w-full bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-full py-2.5 font-bold flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg text-sm">
                                View Certificate
                                <ExternalLink size={14} />
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Certifications;

