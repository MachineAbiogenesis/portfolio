import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['Java', 'Java 8 / J2EE', 'SQL', 'PL/SQL', 'Python']
        },
        {
            title: 'Frameworks',
            skills: ['Spring Boot', 'Spring', 'Hibernate']
        },
        {
            title: 'Web Services / APIs',
            skills: ['REST API', 'JSON', 'JWT', 'OAuth 2.0', 'Swagger']
        },
        {
            title: 'Databases',
            skills: ['Oracle', 'PostgreSQL', 'RDBMS', 'Relational Databases']
        },
        {
            title: 'Cloud',
            skills: ['Azure', 'AWS']
        },
        {
            title: 'Tools',
            skills: ['Eclipse', 'SQL Management Studio', 'JIRA', 'TortoiseSVN', 'SonarQube', 'Maven', 'Git']
        },
        {
            title: 'Machine Learning',
            skills: ['TensorFlow', 'PyCharm', 'PyTorch', 'NumPy', 'Keras', 'Scikit-Learn', 'Artificial Intelligence']
        }
    ]

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category glass-card">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
