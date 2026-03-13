import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Zap, Globe, Instagram } from 'lucide-react'
import ThreeScene from './components/ThreeScene'
import './index.css'

const sectionVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.5, ease: "easeInOut" } as any
}

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  const sections = [
    { id: 'hero', label: 'AN' },
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ]

  return (
    <div className="spa-container no-scroll">
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '20px 0', borderBottom: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left: Logo */}
          <div 
            style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.1em', cursor: 'pointer', color: 'var(--neon-lime)' }}
            onClick={() => setActiveSection('hero')}
          >
            AN.
          </div>

          {/* Center-Left: Section Links */}
          <div style={{ display: 'flex', gap: '24px', fontFamily: 'var(--font-alt)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', marginLeft: '40px', flex: 1 }}>
            {sections.slice(1).map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: activeSection === section.id ? 'var(--text-color)' : 'rgba(248, 250, 252, 0.5)', 
                  cursor: 'pointer', 
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  letterSpacing: 'inherit',
                  transition: 'all 0.3s ease',
                  padding: '8px 0',
                  borderBottom: activeSection === section.id ? '2px solid var(--neon-lime)' : '2px solid transparent'
                }}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Right: Social Links */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="https://github.com/ahadunnobi" target="_blank" style={{ color: 'inherit', opacity: 0.6, transition: 'opacity 0.3s' }} onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}><Github size={18} /></a>
            <a href="https://linkedin.com/in/ahadunnobi" target="_blank" style={{ color: 'inherit', opacity: 0.6, transition: 'opacity 0.3s' }} onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}><Linkedin size={18} /></a>
            <a href="https://instagram.com/ahadunnobi" target="_blank" style={{ color: 'inherit', opacity: 0.6, transition: 'opacity 0.3s' }} onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}><Instagram size={18} /></a>
            <a href="#" target="_blank" style={{ color: 'inherit', opacity: 0.6, transition: 'opacity 0.3s' }} onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}><Globe size={18} /></a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ width: '100%', height: '100%' }}>
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && (
            <motion.section 
              key="hero"
              className="section-view"
              {...sectionVariants}
            >
              <div style={{ position: 'absolute', inset: 0, zIndex: -1, opacity: 0.4 }}>
                <ThreeScene />
              </div>
              <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', height: '100%' }}>
                  <div>
                    <div style={{ display: 'inline-block', padding: '6px 16px', border: '1px solid var(--neon-lime)', color: 'var(--neon-lime)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '24px', borderRadius: '4px' }}>
                      TRAINEE · PROGRAMMING HERO
                    </div>
                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem', lineHeight: 0.9 }}>
                      MERN Stack<br /><span className="gradient-text">Developer</span>
                    </h1>
                    <p style={{ maxWidth: '500px', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.6', color: '#cbd5e1', fontStyle: 'italic' }}>
                      Philosopher by thought, developer by trade. Pursuing the <span style={{ color: 'var(--neon-lime)' }}>Existential Question</span> through code.
                    </p>
                    <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'var(--font-alt)' }}>
                        <MapPin size={16} color="var(--neon-lime)" /> Chattogram, Bangladesh
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <button onClick={() => setActiveSection('contact')} className="btn btn-primary">GET IN TOUCH</button>
                      <button onClick={() => setActiveSection('projects')} className="btn btn-ghost">VIEW PROJECT</button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ width: '380px', height: '500px', position: 'relative' }}>
                      <div style={{ position: 'absolute', inset: '-15px', border: '1px solid var(--neon-lime)', opacity: 0.3, borderRadius: '12px', zIndex: 0 }}></div>
                      <img 
                        src="assets/profile.png" 
                        alt="Ahadun Nobi" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', border: '1px solid var(--glass-border)', position: 'relative', zIndex: 1 }}
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=380&h=500&auto=format&fit=crop' }}
                      />
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
              <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
                  <div>
                    <p style={{ color: 'var(--neon-lime)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '16px', fontFamily: 'var(--font-alt)' }}>// 01 · ABOUT</p>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '32px', lineHeight: 1.1 }}>
                      Building things<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>that matter.</span>
                    </h2>
                    <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#94a3b8' }}>
                      <p style={{ marginBottom: '24px' }}>
                        I'm a MERN Stack Developer based in Chittagong, Bangladesh. I specialize in building responsive and scalable web applications using the modern JavaScript ecosystem.
                      </p>
                      <p>
                        Philosophy is my secondary passion, providing a unique perspective on problem-solving and architectural design in software development.
                      </p>
                    </div>
                  </div>
                  <div className="glass" style={{ padding: '40px', background: 'rgba(255,255,255,0.03)' }}>
                    <h3 style={{ marginBottom: '24px', fontSize: '1.2rem', letterSpacing: '0.1em' }}>CORE SKILLS</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      {['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind', 'Three.js', 'TypeScript'].map(skill => (
                        <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                          <Zap size={14} color="var(--neon-lime)" /> {skill}
                        </div>
                      ))}
                    </div>
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
              <div className="container" style={{ maxWidth: '900px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                  <p style={{ color: 'var(--neon-lime)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '16px', fontFamily: 'var(--font-alt)' }}>// 02 · EXPERIENCE</p>
                  <h2 style={{ fontSize: '3rem' }}>Journey</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {[
                    { role: 'Billing Executive', company: 'LAZZ PHARMA', period: '2024 – 2025' },
                    { role: 'Cadet Sergeant', company: 'BNCC ARMY WING', period: '2022 – 2025' },
                    { role: 'ICT Consultant', company: 'SCIENCE EXPLORER', period: '2019 – 2022' }
                  ].map((exp, i) => (
                    <div key={i} className="glass" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{exp.role}</h3>
                        <p style={{ color: 'var(--neon-lime)', fontSize: '0.8rem', fontWeight: 600 }}>{exp.company}</p>
                      </div>
                      <div style={{ fontFamily: 'var(--font-alt)', color: '#64748b', fontSize: '0.8rem', fontWeight: 700 }}>
                        {exp.period}
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
              <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <p style={{ color: 'var(--neon-lime)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '16px', fontFamily: 'var(--font-alt)' }}>// 03 · WORK</p>
                  <h2 style={{ fontSize: '3rem' }}>Selected Projects</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                  {[
                    { title: 'Dev Command Center', img: 'assets/project-dev-command.png' },
                    { title: 'GitHub Issue Tracker', img: 'assets/project-github-issues.png' },
                    { title: 'Job Tracker App', img: 'assets/project-job-tracker.png' }
                  ].map((proj, i) => (
                    <div key={i} className="glass" style={{ overflow: 'hidden', padding: '0' }}>
                      <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&h=200&auto=format&fit=crop' }} />
                      <div style={{ padding: '20px' }}>
                        <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>{proj.title}</h3>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <span style={{ fontSize: '0.6rem', color: 'var(--neon-lime)', fontWeight: 800 }}>MERN</span>
                          <span style={{ fontSize: '0.6rem', color: 'var(--secondary-color)', fontWeight: 800 }}>DASHBOARD</span>
                        </div>
                      </div>
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
              <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--neon-lime)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '16px', fontFamily: 'var(--font-alt)' }}>// 04 · CONTACT</p>
                <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '32px', lineHeight: 1 }}>
                  Let's <span className="gradient-text">Talk.</span>
                </h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '40px' }}>
                  <a href="mailto:ahadunnobi1@gmail.com" className="btn glass" style={{ padding: '24px' }}>
                    <Mail size={32} color="var(--neon-lime)" />
                  </a>
                  <a href="https://linkedin.com/in/ahadunnobi" target="_blank" className="btn glass" style={{ padding: '24px' }}>
                    <Linkedin size={32} color="var(--primary-color)" />
                  </a>
                  <a href="https://github.com/ahadunnobi" target="_blank" className="btn glass" style={{ padding: '24px' }}>
                    <Github size={32} color="white" />
                  </a>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', padding: '16px 0', borderTop: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: 'var(--font-alt)', fontSize: '0.6rem', color: '#64748b', letterSpacing: '0.2em', fontWeight: 700 }}>
            © 2026 AHADUN NOBI · CRAFTED WITH PASSION
          </p>
          <div style={{ fontFamily: 'var(--font-alt)', fontSize: '0.6rem', color: 'rgba(200, 240, 96, 0.4)', fontWeight: 800 }}>
            BUILT WITH REACT & THREE.JS
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
