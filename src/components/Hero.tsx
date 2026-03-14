import { MapPin, Zap } from 'lucide-react'
import './Hero.css'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero = ({ setActiveSection }: HeroProps) => {
  return (
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
            <button onClick={() => setActiveSection('contact')} className="btn-primary">INITIATE CONTACT</button>
            <button onClick={() => setActiveSection('projects')} className="btn-ghost">VIEW PROJECTS</button>
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
  )
}

export default Hero
