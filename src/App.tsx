import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Events from './components/Events';
import Footer from './components/Footer';
import Biography from './pages/Biography';
import Credits from './pages/Credits';
import Listen from './pages/Listen';
import Contact from './pages/Contact';
import './index.css';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (currentHash === '#biography' || currentHash === '#credits' || currentHash === '#listen' || currentHash === '#contact') return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Small timeout to ensure DOM elements are rendered
    setTimeout(() => {
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [currentHash]);

  return (
    <>
      <Header />
      {currentHash === '#biography' ? (
        <Biography />
      ) : currentHash === '#credits' ? (
        <Credits />
      ) : currentHash === '#listen' ? (
        <Listen />
      ) : currentHash === '#contact' ? (
        <Contact />
      ) : (
        <main>
          <Hero />
          <Projects />
          <Events />
        </main>
      )}
      <Footer />
    </>
  );
}

export default App;
