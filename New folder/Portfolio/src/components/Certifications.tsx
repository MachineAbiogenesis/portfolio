import './Certifications.css'

const Certifications = () => {
    const certs = [
        {
            name: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            link: "https://aws.amazon.com"
        },
        {
            name: "Meta Front-End Developer",
            issuer: "Meta",
            link: "https://coursera.org"
        },
        {
            name: "TensorFlow Developer",
            issuer: "Google",
            link: "https://tensorflow.org"
        },
        {
            name: "React Native Specialist",
            issuer: "Udemy",
            link: "#"
        },
        {
            name: "Python for Data Science",
            issuer: "IBM",
            link: "#"
        }
    ]

    return (
        <section id="certifications" className="section certifications">
            <div className="container">
                <div className="SectionTitle">04 / Certifications</div>

                <div className="cert-grid">
                    {certs.map((cert, index) => (
                        <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="cert-item">
                            <h3 className="cert-name">{cert.name}</h3>
                            <span className="cert-issuer">{cert.issuer}</span>
                            <div className="cert-arrow">→</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
