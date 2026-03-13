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
  const [isHovering, setIsHovering] = useState(false)
  const ringPos = useRef({ x: 0, y: 0 })
  const trailPos = useRef({ x: 0, y: 0 })
  const [ringState, setRingState] = useState({ x: 0, y: 0 })
  const [trailState, setTrailState] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const animateCursor = () => {
      // Smooth following for ring
      ringPos.current.x += (mousePos.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mousePos.y - ringPos.current.y) * 0.12
      setRingState({ x: ringPos.current.x, y: ringPos.current.y })

      // Slower trail for "fiery" effect
      trailPos.current.x += (mousePos.x - trailPos.current.x) * 0.08
      trailPos.current.y += (mousePos.y - trailPos.current.y) * 0.08
      setTrailState({ x: trailPos.current.x, y: trailPos.current.y })

      requestAnimationFrame(animateCursor)
    }
    const animationFrame = requestAnimationFrame(animateCursor)
    return () => cancelAnimationFrame(animationFrame)
  }, [mousePos])

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <div className="spa-container">
      {/* Dynamic Cursor UI */}
      <div className="cursor-wrapper">
        <div 
          className="cursor-trail" 
          style={{ left: trailState.x, top: trailState.y, transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})` }}
        ></div>
        <div 
          className="cursor-ring" 
          style={{ 
            left: ringState.x, 
            top: ringState.y, 
            width: isHovering ? '60px' : '40px', 
            height: isHovering ? '60px' : '40px' 
          }}
        ></div>
        <div className="cursor-dot" style={{ left: mousePos.x, top: mousePos.y }}></div>
      </div>

      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, height: 'var(--nav-height)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(20px)', background: 'rgba(10,10,10,0.85)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <div 
            className="nav-logo"
            style={{ cursor: 'pointer', height: '32px', display: 'flex', alignItems: 'center' }}
            onClick={() => setActiveSection('hero')}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img src="/assets/navbar-logo.png" alt="Ahadun Nobi" style={{ height: '100%', width: 'auto', filter: 'invert(1) brightness(1.5)' }} />
          </div>

          <div style={{ display: 'flex', gap: '3rem', listStyle: 'none', alignItems: 'center', flex: 1, marginLeft: '5rem' }}>
            {sections.slice(1).map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: activeSection === section.id ? 'var(--accent)' : 'var(--muted)', 
                  cursor: 'pointer', 
                  fontFamily: 'var(--font-nav)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s',
                  padding: '10px 0',
                  fontWeight: activeSection === section.id ? '700' : '500',
                  position: 'relative'
                }}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'var(--accent)' }}
                  />
                )}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            <a href="https://github.com/ahadunnobi" target="_blank" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} style={{ color: 'var(--muted)', transition: 'color 0.3s' }}><Github size={18} /></a>
            <a href="https://linkedin.com/in/ahadunnobi" target="_blank" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} style={{ color: 'var(--muted)', transition: 'color 0.3s' }}><Linkedin size={18} /></a>
            <a href="https://instagram.com/ahadunnobi" target="_blank" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} style={{ color: 'var(--muted)', transition: 'color 0.3s' }}><Instagram size={18} /></a>
            <a href="#" target="_blank" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} style={{ color: 'var(--muted)', transition: 'color 0.3s' }}><Globe size={18} /></a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ flex: 1, position: 'relative' }}>
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && (
            <motion.section 
              key="hero"
              className="section-view"
              {...sectionVariants}
            >
              <div className="section-content-wrapper">
                <div className="hero-grid-lines"></div>
                <div className="hero-orb"></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', alignItems: 'center', gap: '5rem' }}>
                  <div style={{ zIndex: 1 }}>
                    <div className="hero-tag">AVAILABLE FOR OPPORTUNITIES</div>
                    <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', lineHeight: 0.9, marginBottom: '2rem' }}>
                      Ahadun<br /><span style={{ color: 'var(--accent)' }}>Nobi</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--muted)', lineHeight: 1.6, maxWidth: '520px', marginBottom: '3rem', fontWeight: '500' }}>
                      MERN Developer & Philosopher — building professional digital experiences fueled by existential inquiry.
                    </p>
                    <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '3.5rem' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <MapPin size={16} style={{ color: 'var(--accent)' }} /> Chattogram, Bangladesh
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Zap size={16} style={{ color: 'var(--accent)' }} /> Trainee @ Programming Hero
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                      <button onClick={() => setActiveSection('contact')} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="btn-primary">GET IN TOUCH</button>
                      <button onClick={() => setActiveSection('projects')} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="btn-ghost">VIEW PROJECTS</button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ position: 'relative', width: '380px', height: '480px' }}>
                      <img 
                        src="/assets/profile.png" 
                        alt="Ahadun Nobi" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(10%) contrast(1.1)', border: '1px solid var(--border)' }}
                      />
                      <div style={{ position: 'absolute', bottom: '-25px', right: '-25px', width: '100%', height: '100%', border: '1px solid var(--accent)', opacity: 0.2, pointerEvents: 'none', zIndex: -1 }}></div>
                      <div style={{ position: 'absolute', bottom: '24px', left: '-25px', background: 'var(--accent)', color: '#0a0a0a', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', padding: '0.6rem 1.25rem' }}>
                        FULL-STACK DEVELOPER
                      </div>
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
            >
              <div className="section-content-wrapper">
                <p className="section-label">// 01 · ABOUT</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '7rem', alignItems: 'start' }}>
                  <div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', marginBottom: '3.5rem', lineHeight: 1.1 }}>Building systems<br />with <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>purpose</span>.</h2>
                    <div style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#b0ada6', fontWeight: '400' }}>
                      <p style={{ marginBottom: '1.5rem' }}>
                        I specialize in the <strong style={{ color: 'var(--text)' }}>MERN Stack</strong>, crafting high-performance web applications that bridge the gap between complex logic and intuitive user experience. My approach is rooted in clean architecture and scalable design.
                      </p>
                      <p style={{ marginBottom: '1.5rem' }}>
                        As a philosophy student, I bring a unique analytical lens to software engineering. I don't just solve bugs; I deconstruct problems to their core essence to build robust solutions that stand the test of time.
                      </p>
                      <p>
                        Currently pushing boundaries as a trainee at <strong style={{ color: 'var(--text)' }}>Programming Hero</strong>, where I'm mastering modern development workflows and collaborative engineering.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {[
                      { num: '05+', label: 'DEVELOPED PROJECTS' },
                      { num: '03', label: 'CERTIFICATIONS' },
                      { num: '03', label: 'TECH SEGMENTS' },
                      { num: 'SGT', label: 'LEADERSHIP RANK' }
                    ].map((stat, i) => (
                      <div key={i} className="stat-card">
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>{stat.num}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '0.15em', fontWeight: '600' }}>{stat.label}</div>
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
            >
              <div className="section-content-wrapper" style={{ maxWidth: '1000px' }}>
                <p className="section-label">// 03 · EXPERIENCE</p>
                <h2 style={{ fontSize: ' clamp(2.5rem, 5vw, 4rem)', marginBottom: '4rem' }}>Professional Journey</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { date: 'MAY 2024 – DEC 2025', role: 'Billing Executive', company: 'LAZZ PHARMA · FULL-TIME', desc: 'Managed complex pharmaceutical transactions and digital billing operations, ensuring 100% accuracy in high-pressure environments.' },
                    { date: 'FEB 2022 – FEB 2025', role: 'Cadet Sergeant', company: 'BNCC ARMY WING', desc: 'Led a platoon of cadets, overseeing strategic training and maintaining strict operational discipline as a high-ranking student officer.' },
                    { date: 'NOV 2019 – JAN 2022', role: 'ICT Consultant', company: 'SCIENCE EXPLORER', desc: 'Directed information technology strategies and digital transformation initiatives for a localized science education platform.' }
                  ].map((exp, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '4rem', padding: '3rem 0', borderBottom: i === 2 ? 'none' : '1px solid var(--border)' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--muted)', letterSpacing: '0.1em', fontWeight: '600' }}>{exp.date}</div>
                      <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>{exp.role}</div>
                        <div style={{ fontFamily: 'var(--font-nav)', fontSize: '0.9rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1.25rem', fontWeight: '700' }}>{exp.company}</div>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#9a9790' }}>{exp.desc}</p>
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
            >
              <div className="section-content-wrapper">
                <p className="section-label">// 04 · PROJECTS</p>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '4rem' }}>Selected Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                  {[
                    { title: 'Dev Command Center', tag: 'MERN · 2026', img: '/assets/project-dev-command.png', stack: ['React', 'Node', 'MongoDB'] },
                    { title: 'GitHub Issue Tracker', tag: 'JS · 2025', img: '/assets/project-github-issues.png', stack: ['JS', 'Tailwind', 'REST'] },
                    { title: 'Job Tracker Platform', tag: 'FULLSTACK · 2026', img: '/assets/project-job-tracker.png', stack: ['React', 'Firebase', 'Vite'] }
                  ].map((proj, i) => (
                    <div key={i} className="project-card">
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent2)', letterSpacing: '0.15em', border: '1px solid rgba(96,240,200,0.3)', padding: '0.3rem 0.75rem', display: 'inline-block', marginBottom: '1.5rem', fontWeight: '600' }}>{proj.tag}</div>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{proj.title}</h3>
                      <div style={{ width: '100%', height: '180px', background: 'var(--surface2)', marginBottom: '2rem', overflow: 'hidden', border: '1px solid var(--border)' }}>
                        <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, transition: 'all 0.5s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                         {proj.stack.map(s => <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)', background: 'var(--surface2)', padding: '0.3rem 0.75rem', fontWeight: '500' }}>{s}</span>)}
                      </div>
                      <a href="#" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="btn-ghost" style={{ padding: '0.75rem 1.5rem', fontSize: '0.8rem', width: '100%', justifyContent: 'center' }}>CASE STUDY →</a>
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
            >
              <div className="section-content-wrapper">
                <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '8rem', alignItems: 'center' }}>
                  <div>
                    <p className="section-label">// 06 · CONTACT</p>
                    <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '2.5rem' }}>Let's<br />build<br /><span style={{ color: 'var(--accent)' }}>together.</span></h2>
                    <p style={{ fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '3rem', fontWeight: '400' }}>I am currently open to Junior Developer roles and innovative freelance projects. Let's start a conversation about code, logic, and the future.</p>
                    <a href="mailto:info.ahadunnobi@gmail.com" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="btn-primary">INITIATE CONNECTION</a>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {[
                      { icon: <Mail size={20} />, label: 'DIRECT EMAIL', value: 'info.ahadunnobi@gmail.com', href: 'mailto:info.ahadunnobi@gmail.com' },
                      { icon: <Phone size={20} />, label: 'VOICE CONTACT', value: '+88 01610-176181', href: 'tel:+8801610176181' },
                      { icon: <Linkedin size={20} />, label: 'LINKEDIN', value: 'ahadunnobi', href: 'https://www.linkedin.com/in/ahadunnobi' },
                      { icon: <Globe size={20} />, label: 'DIGITAL HUB', value: 'ahadven.netlify.app', href: 'https://ahadven.netlify.app' }
                    ].map((item, i) => (
                      <a key={i} href={item.href} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="contact-link">
                         <div style={{ color: 'var(--accent)' }}>{item.icon}</div>
                         <div>
                            <span style={{ color: 'var(--muted)', fontSize: '0.7rem', display: 'block', letterSpacing: '0.15em', fontWeight: '700', marginBottom: '0.2rem' }}>{item.label}</span>
                            <span style={{ fontWeight: '600' }}>{item.value}</span>
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
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', height: 'var(--footer-height)', borderTop: '1px solid var(--border)', backdropFilter: 'blur(20px)', background: 'rgba(10,10,10,0.85)', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--muted)', fontWeight: '500' }}>
            © {new Date().getFullYear()} <span style={{ color: 'var(--accent)', fontWeight: '700' }}>Ahadun Nobi</span> — ENGINEERED INDIVIDUALLY
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--muted)' }}>
              BUILT WITH <span style={{ color: 'var(--accent)' }}>REACT</span>
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--muted)' }}>
              REFINED BY <span style={{ color: 'var(--accent)' }}>LOGIC</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
