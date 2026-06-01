import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.12 });

    const setupObserver = () => {
      document.querySelectorAll('.skill-card, .project-card, .cert-card, .timeline-item').forEach((el) => {
        observer.observe(el);
      });
    };

    // Delay slightly to ensure children are rendered before observing
    setTimeout(setupObserver, 300);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <BackgroundCanvas />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;
