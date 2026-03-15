import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './index.css'

import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as any
}

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    // Cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    const moveCursor = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    document.addEventListener('mousemove', moveCursor);

    function animateRing() {
      if (!ring) return;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <div className="spa-container">
      <div id="cursor"></div>
      <div id="cursorRing"></div>
      <Background />

      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        sections={sections} 
      />

      {/* Main Content Area */}
      <main style={{ flex: 1, position: 'relative' }}>
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && (
            <motion.section 
              key="hero"
              className="section-view"
              {...sectionVariants}
            >
              <Hero setActiveSection={setActiveSection} />
            </motion.section>
          )}

          {activeSection === 'about' && (
            <motion.section 
              key="about" 
              className="section-view"
              {...sectionVariants}
            >
              <About />
            </motion.section>
          )}

          {activeSection === 'skills' && (
            <motion.section 
              key="skills" 
              className="section-view"
              {...sectionVariants}
            >
              <Skills />
            </motion.section>
          )}

          {activeSection === 'experience' && (
            <motion.section 
              key="experience" 
              className="section-view"
              {...sectionVariants}
            >
              <Experience />
            </motion.section>
          )}

          {activeSection === 'projects' && (
            <motion.section 
              key="projects" 
              className="section-view"
              {...sectionVariants}
            >
              <Projects />
            </motion.section>
          )}

          {activeSection === 'contact' && (
            <motion.section 
              key="contact" 
              className="section-view"
              {...sectionVariants}
            >
              <Contact />
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App
