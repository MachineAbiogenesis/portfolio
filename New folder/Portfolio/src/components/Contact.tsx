import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="contact-wrapper">
                    <h2 className="contact-heading">Let's work together.</h2>
                    <p className="contact-text">
                        I'm currently available for freelance work and open to full-time opportunities.
                        If you have a project that needs some creative injection, then that's where I come in!
                    </p>

                    <div className="contact-links">
                        <a href="mailto:niraj.aher@gmail.com" className="contact-link-item">
                            <span>Email</span>
                            <span className="link-value">niraj.aher@gmail.com</span>
                        </a>
                        <a href="https://linkedin.com/in/nirajaher" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                            <span>LinkedIn</span>
                            <span className="link-value">nirajaher</span>
                        </a>
                        <div className="contact-link-item">
                            <span>Location</span>
                            <span className="link-value">Mumbai / Pune</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
