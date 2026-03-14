import { useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import { Github, Linkedin, Mail, MapPin, Instagram, Zap, Phone } from 'lucide-react'
import './index.css'

// --- Components ---

const Background = () => {
  return (
    <div className="bg-canvas-wrapper">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#c8f060" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={[2, 0, -2]}>
              <sphereGeometry args={[1.5, 64, 64]} />
              <MeshDistortMaterial
                color="#111111"
                emissive="#c8f060"
                emissiveIntensity={0.15}
                roughness={0.1}
                distort={0.4}
                speed={2}
              />
            </mesh>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  )
}


const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as any
}

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <div className="spa-container">
      <Background />

      {/* Navigation */}
      <nav className="nav-fix">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div 
            style={{ cursor: 'pointer', height: '36px', display: 'flex', alignItems: 'center' }}
            onClick={() => setActiveSection('hero')}
          >
            <img src="/assets/navbar-logo.png" alt="Ahad" style={{ height: '100%', width: 'auto', filter: 'invert(1) brightness(1.5)' }} />
          </div>

          <div style={{ display: 'flex', gap: '3.5rem', listStyle: 'none', alignItems: 'center', flex: 1, marginLeft: '6rem' }}>
            {sections.slice(1).map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: activeSection === section.id ? 'var(--accent)' : 'var(--muted)', 
                  cursor: 'pointer', 
                  fontFamily: 'var(--font-nav)',
                  fontSize: '1rem',
                  letterSpacing: '0.05em',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                  padding: '14px 0',
                  fontWeight: activeSection === section.id ? '700' : '500',
                  position: 'relative'
                }}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    style={{ position: 'absolute', bottom: 0, left: '-5%', right: '-5%', height: '3px', background: 'var(--accent)' }}
                  />
                )}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            <a href="https://github.com/ahadunnobi" target="_blank"  
  
 style={{ color: 'var(--muted)', transition: 'color 0.4s' }}><Github size={22} /></a>
            <a href="https://linkedin.com/in/ahadunnobi" target="_blank"  
  
 style={{ color: 'var(--muted)', transition: 'color 0.4s' }}><Linkedin size={22} /></a>
            <a href="https://instagram.com/ahadunnobi" target="_blank"  
  
 style={{ color: 'var(--muted)', transition: 'color 0.4s' }}><Instagram size={22} /></a>
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
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', alignItems: 'center', gap: '3rem' }}>
                  <div style={{ zIndex: 1 }}>
                    <div className="hero-tag">OPEN FOR COLLABORATION</div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.9, marginBottom: '1rem' }}>
                      Ahadun<br /><span style={{ color: 'var(--accent)' }}>Nobi</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.6, maxWidth: '500px', marginBottom: '1.2rem', fontWeight: '500' }}>
                      Full-Stack Architect scaling professional digital solutions with <span style={{ color: 'var(--text)' }}>React, Node.js, Express, and MongoDB</span>, driven by existential inquiry.
                    </p>
                    <div style={{ display: 'flex', gap: '3rem', marginBottom: '2rem' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <MapPin size={20} style={{ color: 'var(--accent)' }} /> Chattogram, BD
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <Zap size={20} style={{ color: 'var(--accent)' }} /> Programming Hero · Batch 13
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                      <button onClick={() => setActiveSection('contact')}  
  
 className="btn-primary">INITIATE CONTACT</button>
                      <button onClick={() => setActiveSection('projects')}  
  
 className="btn-ghost">VIEW PROJECTS</button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ position: 'relative', width: '280px', height: '380px' }}>
                      <img 
                        src="/assets/profile.png" 
                        alt="Ahadun Nobi" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.2)', border: '1px solid var(--border)' }}
                      />
                      <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', width: '100%', height: '100%', border: '1px solid var(--accent)', opacity: 0.3, pointerEvents: 'none', zIndex: -1 }}></div>
                      <div style={{ position: 'absolute', bottom: '15px', left: '-20px', background: 'var(--accent)', color: '#0a0a0a', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.25em', padding: '0.5rem 1rem' }}>
                        FULL-STACK ENGINEER
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
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'start' }}>
                  <div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)', marginBottom: '2rem', lineHeight: 1.1 }}>Engineering logic<br />with <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>human intent</span>.</h2>
                    <div style={{ fontSize: '1.25rem', lineHeight: '1.9', color: '#b0ada6' }}>
                      <p style={{ marginBottom: '1rem' }}>
                        I specialize in the <strong style={{ color: 'var(--text)' }}>Modern Web Ecosystem</strong>, constructing robust platforms that prioritize performance and structural integrity. My technical philosophy is built on the belief that complex systems should feel effortless.
                      </p>
                      <p style={{ marginBottom: '1rem' }}>
                        Applying first-principles thinking from my philosophical background, I don't just write scripts; I design architectures that solve fundamental problems with mathematical precision.
                      </p>
                      <p>
                        Currently advancing through <strong style={{ color: 'var(--text)' }}>Programming Hero</strong>, mastering cloud-native workflows and high-concurrency software development.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[
                      { num: '06+', label: 'DEPLOYED PLATFORMS' },
                      { num: '03', label: 'ACCREDITATIONS' },
                      { num: '03', label: 'TECH SEGMENTS' },
                      { num: 'ADJUTANT', label: 'LEADERSHIP RANK' }
                    ].map((stat, i) => (
                      <div key={i} className="stat-card" style={{ padding: '1.5rem' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>{stat.num}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--muted)', letterSpacing: '0.2em', fontWeight: '700' }}>{stat.label}</div>
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
              <div className="section-content-wrapper" style={{ maxWidth: '1100px' }}>
                <p className="section-label">// 03 · EXPERIENCE</p>
                <h2 style={{ fontSize: ' clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '2rem' }}>Professional Record</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { date: 'MAY 2024 – DEC 2025', role: 'Billing Executive', company: 'LAZZ PHARMA · FULL-TIME', desc: 'Managed high-concurrency digital billing operations and pharmaceutical inventory tracking, maintaining 100% data integrity.' },
                    { date: 'FEB 2022 – FEB 2025', role: 'Cadet Sergeant', company: 'BNCC ARMY WING', desc: 'Commanded platoon exercises and operational logistics as a high-ranking cadet officer, overseeing strategic leadership training.' },
                    { date: 'NOV 2019 – JAN 2022', role: 'ICT Consultant', company: 'SCIENCE EXPLORER', desc: 'Formulated digital education strategies and managed cloud infrastructure for high-scale localized platforms.' }
                  ].map((exp, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3rem', padding: '2rem 0', borderBottom: i === 2 ? 'none' : '1px solid var(--border)' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--muted)', letterSpacing: '0.15em', fontWeight: '700' }}>{exp.date}</div>
                      <div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.7rem', color: 'var(--text)' }}>{exp.role}</div>
                        <div style={{ fontFamily: 'var(--font-nav)', fontSize: '1rem', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '1.8rem', fontWeight: '800' }}>{exp.company}</div>
                        <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#9a9790' }}>{exp.desc}</p>
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
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '2rem' }}>Strategic Builds</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                  {[
                    { title: 'Cloud Command System', tag: 'NODE.JS · 2026', img: '/assets/project-dev-command.png', stack: ['React', 'Node.js', 'MongoDB'] },
                    { title: 'Global Issue Tracker', tag: 'TYPESCRIPT · 2025', img: '/assets/project-github-issues.png', stack: ['Express', 'RESTful API', 'Vite'] },
                    { title: 'Job Analytics Engine', tag: 'FULLSTACK · 2026', img: '/assets/project-job-tracker.png', stack: ['React', 'Firebase', 'CSS3'] }
                  ].map((proj, i) => (
                    <div key={i} className="project-card">
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent2)', letterSpacing: '0.2em', border: '1px solid rgba(96,240,200,0.3)', padding: '0.5rem 1rem', display: 'inline-block', marginBottom: '2rem', fontWeight: '700' }}>{proj.tag}</div>
                      <h3 style={{ fontSize: '1.7rem', marginBottom: '2rem' }}>{proj.title}</h3>
                      <div style={{ width: '100%', height: '160px', background: 'var(--surface2)', marginBottom: '1.5rem', overflow: 'hidden', border: '1px solid var(--border)' }}>
                        <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                      </div>
                      <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                         {proj.stack.map(s => <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--muted)', background: 'var(--surface2)', padding: '0.5rem 1rem', fontWeight: '600' }}>{s}</span>)}
                      </div>
                      <a href="#" className="btn-ghost" style={{ padding: '0.8rem 1.5rem', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}>CASE ANALYSIS →</a>
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
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
                  <div>
                    <p className="section-label">// 06 · CONTACT</p>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.05em', marginBottom: '1.5rem' }}>Let's<br />build<br /><span style={{ color: 'var(--accent)' }}>together.</span></h2>
                    <p style={{ fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2rem', fontWeight: '400', maxWidth: '480px' }}>Open for Full-Stack opportunities and strategic technology partnerships. Engineering quality through architectural intelligence.</p>
                    <a href="mailto:info.ahadunnobi@gmail.com"  
  
 className="btn-primary">ESTABLISH CHANNEL</a>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    {[
                      { icon: <Mail size={24} />, label: 'OFFICIAL EMAIL', value: 'info.ahadunnobi@gmail.com', href: 'mailto:info.ahadunnobi@gmail.com' },
                      { icon: <Linkedin size={24} />, label: 'PROFESSIONAL HUB', value: 'linkedin.com/in/ahadunnobi', href: 'https://www.linkedin.com/in/ahadunnobi' },
                      { icon: <Github size={24} />, label: 'VERSION CONTROL', value: 'github.com/ahadunnobi', href: 'https://github.com/ahadunnobi' },
                      { icon: <Phone size={24} />, label: 'ESTABLISH VOICE', value: '+8801731065967', href: 'tel:+8801731065967' }
                    ].map((item, i) => (
                      <a key={i} href={item.href}  
  
 className="contact-link">
                         <div style={{ color: 'var(--accent)' }}>{item.icon}</div>
                         <div>
                            <span style={{ color: 'var(--muted)', fontSize: '0.8rem', display: 'block', letterSpacing: '0.2em', fontWeight: '800', marginBottom: '0.4rem', textTransform: 'uppercase' }}>{item.label}</span>
                            <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>{item.value}</span>
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
      <footer className="footer-fix">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--muted)', fontWeight: '600' }}>
            © {new Date().getFullYear()} <span style={{ color: 'var(--accent)', fontWeight: '800' }}>AHADUN NOBI</span> — ENGINEERED INDIVIDUALLY
          </p>
          <div style={{ display: 'flex', gap: '4rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--muted)' }}>
              CORE <span style={{ color: 'var(--accent)' }}>REACT</span>
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--muted)' }}>
              REFINED <span style={{ color: 'var(--accent)' }}>LOGIC</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
