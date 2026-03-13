import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Globe, Instagram, Phone } from 'lucide-react'
import './index.css'

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any
}

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const [ringState, setRingState] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const animateRing = () => {
      ringPos.current.x += (mousePos.x - ringPos.current.x) * 0.15
      ringPos.current.y += (mousePos.y - ringPos.current.y) * 0.15
      setRingState({ x: ringPos.current.x, y: ringPos.current.y })
      requestAnimationFrame(animateRing)
    }
    const animationFrame = requestAnimationFrame(animateRing)
    return () => cancelAnimationFrame(animationFrame)
  }, [mousePos])

  const sections = [
    { id: 'hero', label: 'AN' },
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ]

  return (
    <div className="spa-container no-scroll">
      {/* Custom Cursor */}
      <div className="cursor" style={{ left: mousePos.x, top: mousePos.y }}></div>
      <div className="cursor-ring" style={{ left: ringState.x, top: ringState.y }}></div>

      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, height: 'var(--nav-height)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(12px)', background: 'rgba(10,10,10,0.8)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <div 
            className="nav-logo"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', letterSpacing: '0.1em', cursor: 'pointer' }}
            onClick={() => setActiveSection('hero')}
          >
            AN_PORTFOLIO
          </div>

          <div style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center', flex: 1, marginLeft: '4rem' }}>
            {sections.slice(1).map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: activeSection === section.id ? 'var(--text)' : 'var(--muted)', 
                  cursor: 'pointer', 
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.08em',
                  transition: 'color 0.2s',
                  padding: '8px 0',
                  borderBottom: activeSection === section.id ? '1px solid var(--accent)' : '1px solid transparent'
                }}
              >
                {section.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="https://github.com/ahadunnobi" target="_blank" style={{ color: 'var(--muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}><Github size={16} /></a>
            <a href="https://linkedin.com/in/ahadunnobi" target="_blank" style={{ color: 'var(--muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}><Linkedin size={16} /></a>
            <a href="https://instagram.com/ahadunnobi" target="_blank" style={{ color: 'var(--muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}><Instagram size={16} /></a>
            <a href="#" target="_blank" style={{ color: 'var(--muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}><Globe size={16} /></a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ width: '100%', height: '100%', position: 'relative' }}>
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && (
            <motion.section 
              key="hero"
              className="section-view"
              {...sectionVariants}
              style={{ padding: '0 4rem' }}
            >
              <div className="hero-grid-lines"></div>
              <div className="hero-orb"></div>
              <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', width: '100%', gap: '4rem' }}>
                <div style={{ zIndex: 1 }}>
                  <div className="hero-tag">AVAILABLE FOR HIRE</div>
                  <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
                    Ahadun<br /><span style={{ color: 'var(--accent)' }}>Nobi</span>
                  </h1>
                  <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.6, maxWidth: '460px', marginBottom: '2.5rem' }}>
                    MERN Developer & Philosopher — turning existential questions into elegant, scalable code.
                  </p>
                  <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent)' }}>📍</span> Chattogram, Bangladesh
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent)' }}>🎓</span> Programming Hero · Batch 13
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button onClick={() => setActiveSection('contact')} className="btn-primary">GET IN TOUCH</button>
                    <button onClick={() => setActiveSection('projects')} className="btn-ghost">VIEW PROJECTS</button>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                  <div style={{ position: 'relative', width: '320px', height: '320px' }}>
                    <img 
                      src="assets/profile.png" 
                      alt="Ahadun Nobi" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)', border: '1px solid var(--border)' }}
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://ahadven.netlify.app/images/person/ahad1.jpg' }}
                    />
                    <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100%', height: '100%', border: '1px solid var(--accent)', opacity: 0.3, pointerEvents: 'none' }}></div>
                    <div style={{ position: 'absolute', bottom: '16px', left: '-20px', background: 'var(--accent)', color: '#0a0a0a', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', padding: '0.4rem 0.8rem' }}>
                      MERN DEVELOPER
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'about' && (
            <motion.section 
              key="about" 
              className="section-view"
              {...sectionVariants}
              style={{ padding: '0 4rem' }}
            >
              <div className="container" style={{ display: 'block' }}>
                <p className="section-label">// 01 · ABOUT</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
                  <div>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '3rem', lineHeight: 1.1 }}>Building things<br />that <em style={{ fontStyle: 'italic' }}>matter</em>.</h2>
                    <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#b0ada6' }}>
                      <p style={{ marginBottom: '1.2rem' }}>
                        I'm a <strong style={{ color: 'var(--text)', fontStyle: 'italic' }}>MERN Stack Developer</strong> from Chittagong, Bangladesh, building responsive and scalable web applications with React, Node.js, Express.js, MongoDB, and Firebase — clean code, thoughtful architecture.
                      </p>
                      <p style={{ marginBottom: '1.2rem' }}>
                        Beyond development, I'm a <strong style={{ color: 'var(--text)', fontStyle: 'italic' }}>philosophy enthusiast</strong> — a discipline that sharpens how I think, solve problems, and approach every project I work on. I believe the best engineers are rigorous thinkers first.
                      </p>
                      <p>
                        Currently completing an intensive bootcamp at <strong style={{ color: 'var(--text)', fontStyle: 'italic' }}>Programming Hero (Batch 13)</strong>, with real-world projects under my belt.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    {[
                      { num: '3+', label: 'REAL-WORLD PROJECTS' },
                      { num: '2+', label: 'CERTIFICATIONS' },
                      { num: '3', label: 'LANGUAGES SPOKEN' },
                      { num: '3yr', label: 'BNCC CADET SGT' }
                    ].map((stat, i) => (
                      <div key={i} className="stat-card">
                        <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.3rem' }}>{stat.num}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'experience' && (
            <motion.section 
              key="experience" 
              className="section-view"
              {...sectionVariants}
              style={{ padding: '0 4rem' }}
            >
              <div className="container" style={{ display: 'block', maxWidth: '1000px' }}>
                <p className="section-label">// 03 · EXPERIENCE</p>
                <h2 style={{ fontSize: ' clamp(2rem, 4vw, 3.2rem)', marginBottom: '3rem' }}>Work History</h2>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { date: 'MAY 2024 – DEC 2025', role: 'Billing Executive', company: 'LAZZ PHARMA · FULL-TIME', desc: 'Assisted customers with purchases, handled cash and digital transactions, and ensured smooth front-end operations at a busy pharmacy counter.' },
                    { date: 'FEB 2022 – FEB 2025', role: 'Cadet Sergeant', company: 'BNCC ARMY WING', desc: 'Responsible for training and guiding fellow cadets, maintaining discipline, and coordinating cadet activities.' },
                    { date: 'NOV 2019 – JAN 2022', role: 'ICT Consultant', company: 'SCIENCE EXPLORER', desc: 'Co-founded Science Explorer and served as ICT Consultant helping establish the digital infrastructure.' }
                  ].map((exp, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '3rem', padding: '2rem 0', borderBottom: i === 2 ? 'none' : '1px solid var(--border)' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>{exp.date}</div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.3rem' }}>{exp.role}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>{exp.company}</div>
                        <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#8a8780' }}>{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'projects' && (
            <motion.section 
              key="projects" 
              className="section-view"
              {...sectionVariants}
              style={{ padding: '0 4rem' }}
            >
              <div className="container" style={{ display: 'block' }}>
                <p className="section-label">// 04 · PROJECTS</p>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '3rem' }}>Featured Work</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                  {[
                    { title: 'Dev Command Center', tag: 'LATEST · 2026', img: 'assets/project-dev-command.png', stack: ['React', 'Vite', 'JS'] },
                    { title: 'GitHub Issue Tracker', tag: 'PROJECT · 2025', img: 'assets/project-github-issues.png', stack: ['JS', 'API', 'Tailwind'] },
                    { title: 'Job Tracker App', tag: 'PROJECT · MAR 2026', img: 'assets/project-job-tracker.png', stack: ['JS', 'Tailwind'] }
                  ].map((proj, i) => (
                    <div key={i} className="project-card">
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent2)', letterSpacing: '0.12em', border: '1px solid rgba(96,240,200,0.3)', padding: '0.2rem 0.6rem', display: 'inline-block', marginBottom: '1rem' }}>{proj.tag}</div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{proj.title}</h3>
                      <div style={{ width: '100%', height: '140px', background: 'var(--surface2)', marginBottom: '1.5rem', overflow: 'hidden', border: '1px solid var(--border)' }}>
                        <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                         {proj.stack.map(s => <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', background: 'var(--surface2)', padding: '0.25rem 0.6rem' }}>{s}</span>)}
                      </div>
                      <a href="#" className="btn-ghost" style={{ padding: '0.6rem 1.2rem', fontSize: '0.7rem' }}>VIEW PROJECT →</a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'contact' && (
            <motion.section 
              key="contact" 
              className="section-view"
              {...sectionVariants}
              style={{ padding: '0 4rem' }}
            >
              <div className="container" style={{ display: 'block' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem', alignItems: 'center' }}>
                  <div>
                    <p className="section-label">// 06 · CONTACT</p>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>Let's<br />build<br /><span style={{ color: 'var(--accent)' }}>together.</span></h2>
                    <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2rem' }}>Open to Junior Developer roles. If you have a project, an opportunity, or just want to talk code and philosophy — I'm all ears.</p>
                    <a href="mailto:info.ahadunnobi@gmail.com" className="btn-primary">SEND EMAIL</a>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { icon: <Mail size={16} />, label: 'EMAIL', value: 'info.ahadunnobi@gmail.com', href: 'mailto:info.ahadunnobi@gmail.com' },
                      { icon: <Phone size={16} />, label: 'PHONE', value: '+88 01610-176181', href: 'tel:+8801610176181' },
                      { icon: <Linkedin size={16} />, label: 'LINKEDIN', value: 'linkedin.com/in/ahadunnobi', href: 'https://www.linkedin.com/in/ahadunnobi' },
                      { icon: <Globe size={16} />, label: 'PORTFOLIO', value: 'ahadven.netlify.app', href: 'https://ahadven.netlify.app' },
                      { icon: <MapPin size={16} />, label: 'LOCATION', value: 'Chattogram, Bangladesh' }
                    ].map((item, i) => (
                      <a key={i} href={item.href} className="contact-link" style={{ cursor: item.href ? 'pointer' : 'default' }}>
                         <div style={{ color: 'var(--accent)' }}>{item.icon}</div>
                         <div>
                            <span style={{ color: 'var(--muted)', fontSize: '0.65rem', display: 'block', letterSpacing: '0.12em' }}>{item.label}</span>
                            {item.value}
                         </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', height: 'var(--footer-height)', borderTop: '1px solid var(--border)', backdropFilter: 'blur(12px)', background: 'rgba(10,10,10,0.8)', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>
            © {new Date().getFullYear()} <span style={{ color: 'var(--accent)' }}>Ahadun Nobi</span> — All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>
            Built with <span style={{ color: 'var(--accent)' }}>♥</span> & clean code
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
