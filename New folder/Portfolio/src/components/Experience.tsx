import './Experience.css'

const Experience = () => {
    const experiences = [
        {
            company: "Deloitte",
            role: "Analyst",
            period: "2022 - Present",
            desc: "Working on scalable web applications and cloud solutions."
        },
        {
            company: "Capgemini",
            role: "Software Engineer",
            period: "2021 - 2022",
            desc: "Developed full-stack applications using modern technologies."
        },
        {
            company: "Accenture",
            role: "Associate",
            period: "2020 - 2021",
            desc: "Contributed to enterprise software development projects."
        }
    ]

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <div className="SectionTitle">03 / Experience</div>

                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-period">{exp.period}</div>
                            <div className="experience-details">
                                <h3 className="experience-company">{exp.company}</h3>
                                <div className="experience-role">{exp.role}</div>
                                <p className="experience-desc">{exp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
