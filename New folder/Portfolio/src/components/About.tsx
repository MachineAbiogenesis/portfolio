import './About.css'

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="SectionTitle">01 / About</div>

                <div className="about-content">
                    <h2 className="about-heading">
                        I'm a software developer with a passion for <span>Machine Learning</span>.
                    </h2>

                    <div className="about-grid">
                        <div className="about-text">
                            <p>
                                With specialized expertise in Python, C++, and Data Structures & Algorithms, I build scalable software solutions that solve real-world problems.
                            </p>
                            <p>
                                My journey involves working with leading tech consulting firms like Deloitte and Capgemini, where I've honed my skills in full-stack development and cloud technologies.
                            </p>
                            <p>
                                Beyond coding, I'm deeply interested in the potential of AI to transform industries and improve lives using Computer Vision and NLP.
                            </p>
                        </div>

                        <div className="about-skills">
                            <h3>Tech Stack</h3>
                            <div className="skill-tags">
                                <span>React</span>
                                <span>TypeScript</span>
                                <span>Python</span>
                                <span>Node.js</span>
                                <span>TensorFlow</span>
                                <span>AWS</span>
                                <span>Docker</span>
                                <span>Git</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
