import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const scrollToContact = () => {
    const contact = document.querySelector('#contact');
    contact?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page">
      <div className="ambient" aria-hidden="true">
        <span className="ambient__blob ambient__blob--1" />
        <span className="ambient__blob ambient__blob--2" />
        <span className="ambient__blob ambient__blob--3" />
      </div>
      <button className="get-in-touch-btn" onClick={scrollToContact} aria-label="Get in touch">
        Get in touch
      </button>
      <Hero />
      <main>
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
