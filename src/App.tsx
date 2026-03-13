import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ExternalLink, Code2, Rocket, Briefcase, GraduationCap } from 'lucide-react'
import ThreeScene from './components/ThreeScene'
import './index.css'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

function App() {
  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <ThreeScene />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeInUp}>
            <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>
              Hi, I'm <span className="gradient-text">Ahadun Nobi</span>
            </h1>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', marginBottom: '2rem' }}>
              Web Developer | MERN Stack Explorer
            </h2>
            <p style={{ maxWidth: '600px', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
              Passionate developer focused on building scalable full-stack applications with Firebase and the MERN ecosystem. 
              Currently honing full-stack skills and exploring system design.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="mailto:ahadunnobi1@gmail.com" className="btn glass" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={18} /> Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="grid grid-cols-3">
            {[
              { label: 'Repos', value: '46+', icon: <Github /> },
              { label: 'Focus', value: 'MERN', icon: <Code2 /> },
              { label: 'Passion', value: 'System Design', icon: <Rocket /> }
            ].map((stat, i) => (
              <motion.div key={i} className="glass" style={{ padding: '32px', textAlign: 'center' }} {...fadeInUp}>
                <div style={{ color: 'var(--primary-color)', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '4px' }}>{stat.value}</h3>
                <p style={{ opacity: 0.7 }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <motion.h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }} {...fadeInUp}>
            About Me
          </motion.h2>
          <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
            <motion.div {...fadeInUp}>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '24px' }}>
                I am a passionate web developer with a focus on modern full-stack technologies. My journey involves 
                mastering the MERN stack (MongoDB, Express, React, Node.js) through intensive bootcamps like Programming Hero.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Beyond coding, I have a background in ICT consultancy and have contributed to open-source projects. 
                I'm also deeply interested in cybersecurity and how to build secure, robust systems.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} className="glass" style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '24px' }}>Skills & Expertise</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Firebase', 'REST APIs', 'System Design'].map(skill => (
                  <span key={skill} style={{ padding: '8px 16px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '20px', fontSize: '0.9rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <motion.h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }} {...fadeInUp}>
            Experience
          </motion.h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { 
                role: 'ICT Consultant / Science Explorer', 
                company: 'Science Explorer', 
                period: 'Nov 2019 – Jan 2022',
                icon: <Briefcase />
              },
              { 
                role: 'Editor & Developer', 
                company: 'Wikipedia', 
                period: 'Jul 2018 – Mar 2020',
                icon: <Code2 />
              }
            ].map((exp, i) => (
              <motion.div key={i} className="glass" style={{ padding: '32px', marginBottom: '24px', position: 'relative' }} {...fadeInUp}>
                <div style={{ position: 'absolute', left: '-12px', top: '50%', transform: 'translateY(-50%)', width: '24px', height: '24px', background: 'var(--bg-color)', border: '2px solid var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                  {exp.icon}
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <h3 style={{ fontSize: '1.4rem' }}>{exp.role}</h3>
                  <p style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>{exp.company}</p>
                  <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{exp.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <motion.h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }} {...fadeInUp}>
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-3">
            {[
              { 
                title: 'GitHub Issue Tracker', 
                desc: 'A robust system for managing and tracking issues directly integrated with GitHub APIs.',
                link: '#'
              },
              { 
                title: 'Job Tracker PH', 
                desc: 'A specialized job application tracking application developed for the Programming Hero bootcamp.',
                link: '#'
              },
              { 
                title: 'EVENT-note', 
                desc: 'A dynamic event management and note-taking platform focusing on user experience.',
                link: '#'
              }
            ].map((project, i) => (
              <motion.div key={i} className="glass" style={{ overflow: 'hidden' }} {...fadeInUp}>
                <div style={{ height: '200px', background: `linear-gradient(135deg, var(--primary-color)22, var(--secondary-color)22)`, borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Rocket size={48} opacity={0.3} />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ marginBottom: '12px' }}>{project.title}</h3>
                  <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '20px', minHeight: '60px' }}>{project.desc}</p>
                  <a href={project.link} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--secondary-color)', textDecoration: 'none', fontWeight: 600 }}>
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer style={{ padding: '100px 0 50px', position: 'relative' }}>
        <div className="container">
          <div className="glass" style={{ padding: '60px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Let's <span className="gradient-text">Connect</span></h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '40px' }}>
              I'm always open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '40px' }}>
              <a href="https://github.com/ahadunnobi" target="_blank" style={{ color: 'inherit' }}><Github size={32} /></a>
              <a href="https://linkedin.com/in/ahadunnobi" target="_blank" style={{ color: 'inherit' }}><Linkedin size={32} /></a>
              <a href="mailto:ahadunnobi1@gmail.com" style={{ color: 'inherit' }}><Mail size={32} /></a>
              <a href="tel:+8801731065967" style={{ color: 'inherit' }}><Phone size={32} /></a>
            </div>
            <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>
              © 2026 Ahadun Nobi. Built with React and Three.js.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
