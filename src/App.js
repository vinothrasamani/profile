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
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import { DownloadIcon } from 'lucide-react';
import CircularProgress from "@mui/material/CircularProgress";

const RESUME_URL = "https://example.com/your_resume.pdf";
const FILE_NAME = "Vinoth_Resume.pdf";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const refs = React.useMemo(
    () => [homeRef, aboutRef, skillsRef, experienceRef, projectsRef, contactRef],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [current, setCurrent] = useState('main');
  const [opened, setOpening] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const res = await fetch(RESUME_URL, {
        method: "GET",
      });
      if (!res.ok) throw new Error(`Download failed: ${res.status}`);

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = FILE_NAME;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Failed to download resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (current === 'projects') {
      setOpening(true);
    } else {
      setOpening(false);
    }
  }, [current]);

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
      if (navbar) {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 20);
      }
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

  const handleClick = (screen) => {
    setCurrent(screen);
  };

  const close = ()=> {
    setOpening(false);
    handleClick('main');
  }

  const renderPage = () => {
    switch (current) {
      case 'projects':
        return <ProjectsSection onClick={handleClick} isOpen={opened}/>;
      default:
        return (
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
              <ProjectsSection onClick={handleClick} />
            </div>
            <div ref={refs[5]}>
              <ContactSection />
            </div>
            <div style={{ position: "fixed", right: 20, bottom: 20, zIndex: 1400 }}>
              <Tooltip title="Download Resume" arrow>
                <span>
                  <Fab
                    color="primary"
                    onClick={handleDownload}
                    aria-label="download-resume"
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress size={22} thickness={4} />
                    ) : (
                      <DownloadIcon />
                    )}
                  </Fab>
                </span>
              </Tooltip>
            </div>
          </main>
        );
    }
  };

  return (
    <div>
      <Navbar activeIndex={activeIndex} onNavClick={handleNavClick} isOpened={opened} close={close}/>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
