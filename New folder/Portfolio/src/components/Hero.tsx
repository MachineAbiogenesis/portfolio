import './Hero.css'

const Hero = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('about')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-intro">
                        <div className="avatar-pill">
                            <div className="avatar-placeholder">NA</div>
                            <span>Hi, I'm Niraj.</span>
                        </div>
                    </div>

                    <h1 className="hero-name">
                        Niraj Aher
                    </h1>

                    <p className="hero-description">
                        Software Developer and Tech Enthusiast who <strong>simplifies complex problems</strong> and crafts robust solutions that <strong>drive impact</strong> across web and machine learning domains.
                    </p>

                    <div className="hero-actions">
                        <button onClick={scrollToAbout} className="btn-text-arrow">
                            Get to know me
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
