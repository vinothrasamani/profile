import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/Herosection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const refs = React.useMemo(
    () => [
      homeRef,
      aboutRef,
      skillsRef,
      experienceRef,
      projectsRef,
      contactRef,
    ],
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      refs.forEach((ref, idx) => {
        const el = ref.current;
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if ((top <= 120 && bottom >= 120) || (idx === 0 && scrollY < 100)) {
            setActiveIndex(idx);
          }
        }
      });
      const navbar = document.getElementById('mainNav');
      if (navbar)
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [refs]);

  const handleNavClick = (e, idx) => {
    e.preventDefault();
    const el = refs[idx].current;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <Navbar activeIndex={activeIndex} onNavClick={handleNavClick} />
      <main>
        <div ref={refs[0]}>
          <HeroSection />
        </div>
        <div ref={refs[1]}>
          <AboutSection />
        </div>
        <div ref={refs[2]}>
          <SkillsSection />
        </div>
        <div ref={refs[3]}>
          <ExperienceSection />
        </div>
        <div ref={refs[4]}>
          <ProjectsSection />
        </div>
        <div ref={refs[5]}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
