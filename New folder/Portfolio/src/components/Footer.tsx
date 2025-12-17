import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="copyright">
                        © {new Date().getFullYear()} Niraj Aher. All rights reserved.
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/nirajaher" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/nirajaher" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:niraj.aher@gmail.com">Email</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
