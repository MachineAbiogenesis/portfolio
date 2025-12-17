import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
    return (
        <div className="app">
            <div className="gradient-bg">
                <div className="gradient-circle gradient-circle-1"></div>
                <div className="gradient-circle gradient-circle-2"></div>
                <div className="gradient-circle gradient-circle-3"></div>
            </div>

            <Header />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
