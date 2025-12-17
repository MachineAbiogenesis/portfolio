import './Projects.css'

const Projects = () => {
    const projects = [
        {
            title: "Text Emotion Recognition",
            category: "Machine Learning / NLP",
            description: "An advanced NLP model capable of detecting and classifying human emotions from textual data with high accuracy.",
            tech: ["Python", "TensorFlow", "NLP", "Flask"],
            link: "https://github.com/nirajaher"
        },
        // Add more projects here
    ]

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="SectionTitle">02 / Selected Work</div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-item">
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-meta">
                                    <div className="project-tech">
                                        {project.tech.map((t, i) => (
                                            <span key={i}>{t}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        View Project
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project-image-placeholder">
                                {/* Placeholder for project image - gradients matching the theme */}
                                <div className="placeholder-gradient"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
