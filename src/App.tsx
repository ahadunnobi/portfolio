import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ExternalLink, Code2, Rocket, MapPin, GraduationCap, Zap, Globe } from 'lucide-react'
import ThreeScene from './components/ThreeScene'
import './index.css'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" } as any
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
}

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '24px 0', borderBottom: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.1em' }}>AN.</div>
          <div style={{ display: 'flex', gap: '32px', fontFamily: 'var(--font-alt)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em' }}>
            <a href="#about" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>ABOUT</a>
            <a href="#experience" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>EXPERIENCE</a>
            <a href="#projects" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>PROJECTS</a>
            <a href="#contact" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
        <ThreeScene />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
            <motion.div {...fadeInUp}>
              <div style={{ display: 'inline-block', padding: '6px 16px', border: '1px solid var(--neon-lime)', color: 'var(--neon-lime)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '24px', borderRadius: '4px' }}>
                AVAILABLE FOR HIRE
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem', lineHeight: 0.9 }}>
                Ahadun<br /><span className="gradient-text">Nobi</span>
              </h1>
              <p style={{ maxWidth: '500px', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.6', color: '#cbd5e1', fontStyle: 'italic' }}>
                MERN Developer & Philosopher — turning existential questions into elegant, scalable code.
              </p>
              <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'var(--font-alt)' }}>
                  <MapPin size={16} color="var(--neon-lime)" /> Chattogram, Bangladesh
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'var(--font-alt)' }}>
                  <GraduationCap size={16} color="var(--neon-lime)" /> Programming Hero · Batch 13
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#contact" className="btn btn-primary">GET IN TOUCH</a>
                <a href="#projects" className="btn btn-ghost">VIEW PROJECTS</a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
            >
              <div style={{ width: '360px', height: '480px', position: 'relative' }}>
                <img 
                  src="https://ahadven.netlify.app/images/person/ahad1.jpg" 
                  alt="Ahadun Nobi" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', border: '1px solid var(--glass-border)', filter: 'grayscale(30%) contrast(1.1)' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                <div style={{ position: 'absolute', inset: '20px -20px -20px 20px', border: '1px solid var(--neon-lime)', opacity: 0.2, borderRadius: '12px', zIndex: -1 }}></div>
                <div style={{ position: 'absolute', bottom: '24px', left: '-20px', background: 'var(--neon-lime)', color: '#030712', padding: '8px 16px', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.1em', borderRadius: '2px' }}>
                  MERN DEVELOPER
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid grid-cols-3">
            {[
              { label: 'REAL-WORLD PROJECTS', value: '3+', icon: <Rocket size={24} /> },
              { label: 'CERTIFICATIONS', value: '2+', icon: <Code2 size={24} /> },
              { label: 'BNCC CADET SGT', value: '3yr', icon: <Zap size={24} /> }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass" style={{ padding: '40px', textAlign: 'center' }}>
                <div style={{ color: 'var(--neon-lime)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
                <h3 style={{ fontSize: '3rem', marginBottom: '8px', color: 'var(--neon-lime)' }}>{stat.value}</h3>
                <p style={{ opacity: 0.6, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'var(--font-alt)' }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <motion.div {...fadeInUp}>
            <p style={{ color: 'var(--neon-lime)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '16px', fontFamily: 'var(--font-alt)' }}>// 01 · ABOUT</p>
            <div className="grid grid-cols-2" style={{ gap: '80px' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '32px', lineHeight: 1.1 }}>
                  Building things<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>that matter.</span>
                </h2>
                <div style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#94a3b8' }}>
                  <p style={{ marginBottom: '24px' }}>
                    I'm a <strong style={{ color: 'var(--text-color)' }}>MERN Stack Developer</strong> from Chittagong, Bangladesh, building responsive and scalable web applications with React, Node.js, Express.js, MongoDB, and Firebase — clean code, thoughtful architecture.
                  </p>
                  <p style={{ marginBottom: '24px' }}>
                    Beyond development, I'm a <strong style={{ color: 'var(--text-color)' }}>philosophy enthusiast</strong> — a discipline that sharpens how I think, solve problems, and approach every project I work on. I believe the best engineers are rigorous thinkers first.
                  </p>
                  <p>
                    Currently completing an intensive bootcamp at <strong style={{ color: 'var(--text-color)' }}>Programming Hero (Batch 13)</strong>. Actively looking for Junior Developer opportunities where I can contribute and grow.
                  </p>
                </div>
              </div>
              <div className="glass" style={{ padding: '48px' }}>
                <h3 style={{ marginBottom: '32px', fontSize: '1.5rem' }}>Tech Stack</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {[
                    { name: 'React', icon: '⚛️' },
                    { name: 'Node.js', icon: '🟢' },
                    { name: 'Express.js', icon: '🚂' },
                    { name: 'MongoDB', icon: '🍃' },
                    { name: 'Firebase', icon: '🔥' },
                    { name: 'JavaScript', icon: '🟨' },
                    { name: 'Tailwind CSS', icon: '💨' },
                    { name: 'Google AI', icon: '🤖' },
                    { name: 'System Design', icon: '🧩' },
                    { name: 'Leadership', icon: '👥' }
                  ].map(skill => (
                    <div key={skill.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                      <span style={{ fontSize: '1.2rem' }}>{skill.icon}</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-alt)', color: '#cbd5e1' }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: 'var(--neon-lime)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '16px', fontFamily: 'var(--font-alt)' }}>// 02 · EXPERIENCE</p>
            <h2 style={{ fontSize: '3rem' }}>Work History</h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { 
                role: 'Billing Executive', 
                company: 'LAZZ PHARMA · FULL-TIME — Uttara, Dhaka', 
                period: 'MAY 2024 – DEC 2025',
                desc: 'Assisted customers with purchases, handled cash and digital transactions, and ensured smooth front-end operations at a busy pharmacy counter. Maintained accurate billing records and delivered consistent, reliable service.',
                location: 'On-site'
              },
              { 
                role: 'Cadet Sergeant', 
                company: 'BANGLADESH NATIONAL CADET CORPS (BNCC) — Army Wing', 
                period: 'FEB 2022 – FEB 2025',
                desc: 'One of the senior leadership roles within the cadet structure. Responsible for training and guiding fellow cadets, maintaining discipline, and coordinating activities. Gained hands-on leadership experience.',
                location: 'Leadership'
              },
              { 
                role: 'ICT Consultant & Co-founder', 
                company: 'SCIENCE EXPLORER', 
                period: 'NOV 2019 – JAN 2022',
                desc: 'Co-founded Science Explorer in 2019. Served as ICT Consultant while helping establish the organization\'s digital presence and technical infrastructure.',
                location: 'Consultancy'
              },
              { 
                role: 'Volunteer Editor & Developer', 
                company: 'WIKIPEDIA.ORG', 
                period: 'JUL 2018 – MAR 2020',
                desc: 'Contributed as a volunteer editor and developer on Wikipedia, gaining valuable experience in collaborative knowledge-sharing and open-source contribution.',
                location: 'Open Source'
              }
            ].map((exp, i) => (
              <motion.div key={i} {...fadeInUp} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '40px', padding: '40px 0', borderBottom: i === 3 ? 'none' : '1px solid var(--glass-border)' }}>
                <div style={{ fontFamily: 'var(--font-alt)', color: '#64748b', fontSize: '0.75rem', fontWeight: 700 }}>
                  {exp.period}
                  <div style={{ color: 'var(--neon-lime)', marginTop: '8px' }}>{exp.location}</div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{exp.role}</h3>
                  <p style={{ color: 'var(--neon-lime)', fontFamily: 'var(--font-alt)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>{exp.company}</p>
                  <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem' }}>{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: 'var(--neon-lime)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '16px', fontFamily: 'var(--font-alt)' }}>// 03 · PROJECTS</p>
            <h2 style={{ fontSize: '3rem' }}>Featured Work</h2>
          </motion.div>
          <div className="grid grid-cols-2">
            {[
              { 
                title: 'Dev Command Center', 
                tag: 'LATEST · 2026',
                desc: 'A clean, all-in-one dashboard built for developers — stop jumping between a dozen tabs and have everything in one place. Lightweight stack, simple interface, no bloat.',
                stack: ['React', 'Vite', 'JavaScript'],
                link: 'https://lnkd.in/gshmX8Tf'
              },
              { 
                title: 'Job Tracker Web Application', 
                tag: 'PROJECT · MAR 2026',
                desc: 'A web-based application to help users track and manage job applications efficiently. Organize job listings, monitor application status, and filter applications.',
                stack: ['JavaScript', 'Tailwind CSS'],
                link: '#'
              },
              { 
                title: 'GitHub Issue Tracker', 
                tag: 'PROJECT · 2025',
                desc: 'A GitHub-inspired issue tracking system that allows users to create, manage, and monitor project issues. Demonstrates practical understanding of project workflows.',
                stack: ['JavaScript', 'GitHub API', 'Tailwind CSS'],
                link: 'https://lnkd.in/emgkz-EC'
              },
              { 
                title: 'Job Application Tracker', 
                tag: 'PH PROJECT',
                desc: 'A centralized dashboard to add, update, and monitor job applications — improving productivity during the job-search process with a clean interface.',
                stack: ['JavaScript', 'Tailwind CSS'],
                link: '#'
              }
            ].map((project, i) => (
              <motion.div key={i} className="glass" style={{ padding: '48px', position: 'relative', overflow: 'hidden' }} {...fadeInUp}>
                <div style={{ fontFamily: 'var(--font-alt)', fontSize: '0.65rem', fontWeight: 700, color: 'var(--secondary-color)', letterSpacing: '0.2em', marginBottom: '16px' }}>{project.tag}</div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{project.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>{project.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  {project.stack.map(tag => (
                    <span key={tag} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.7rem', color: '#cbd5e1', border: '1px solid var(--glass-border)', fontFamily: 'var(--font-alt)' }}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--neon-lime)', textDecoration: 'none', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', fontFamily: 'var(--font-alt)' }}>
                  VIEW PROJECT <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ borderTop: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '80px' }}>
            <motion.div {...fadeInUp}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '32px', lineHeight: 1 }}>
                Let's <span className="gradient-text">Connect.</span>
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '48px', maxWidth: '450px' }}>
                I'm always open to new opportunities and philosophical debates about code.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                <a href="mailto:ahadunnobi1@gmail.com" className="btn glass" style={{ padding: '24px', justifyContent: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(200, 240, 96, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neon-lime)' }}>
                    <Mail size={24} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>EMAIL</div>
                    <div style={{ fontWeight: 700 }}>ahadunnobi1@gmail.com</div>
                  </div>
                </a>
                <a href="tel:+8801731065967" className="btn glass" style={{ padding: '24px', justifyContent: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-color)' }}>
                    <Phone size={24} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>PHONE</div>
                    <div style={{ fontWeight: 700 }}>+880 1731-065967</div>
                  </div>
                </a>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="glass" style={{ padding: '60px', textAlign: 'center' }}>
              <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
                <a href="https://github.com/ahadunnobi" target="_blank" style={{ color: 'inherit' }}><Github size={40} /></a>
                <a href="https://linkedin.com/in/ahadunnobi" target="_blank" style={{ color: 'inherit' }}><Linkedin size={40} /></a>
                <a href="#" target="_blank" style={{ color: 'inherit' }}><Globe size={40} /></a>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Chattogram, Bangladesh</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '40px' }}>Born with curiosity, raised in Chittagong.</p>
              <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '32px', display: 'flex', justifyContent: 'center', gap: '32px' }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>46+</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700 }}>REPOSITORIES</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>110%</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700 }}>FOCUS</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-alt)', fontSize: '0.75rem', color: '#64748b', letterSpacing: '0.1em' }}>
            © 2026 AHADUN NOBI. DESIGNED & BUILT WITH <span style={{ color: 'var(--neon-lime)' }}>REACT</span> & <span style={{ color: 'var(--secondary-color)' }}>THREE.JS</span>.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
