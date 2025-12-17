import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Certifications />
      <Experience />
      <Projects />
      <Footer />
    </Layout>
  );
}

export default App;


