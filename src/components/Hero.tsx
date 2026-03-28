import { MapPin, Zap } from 'lucide-react'
import './Hero.css'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero = ({ setActiveSection }: HeroProps) => {
  return (
    <div className="section-content-wrapper">
      <div className="hero-grid">
        <div className="hero-text-side">
          <div className="hero-tag-wrap desktop-only">
            <div className="hero-tag">OPEN FOR COLLABORATION</div>
          </div>
          <h1 className="hero-title">
            Ahadun<br /><span style={{ color: 'var(--accent)' }}>Nobi</span>
          </h1>
          <p className="hero-desc">
            Full-Stack Architect scaling professional digital solutions with <span style={{ color: 'var(--text)' }}>React, Node.js, Express, and MongoDB</span>, driven by existential inquiry.
          </p>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <MapPin size={20} style={{ color: 'var(--accent)' }} /> Chattogram, BD
            </div>
            <div className="hero-stat-item">
              <Zap size={20} style={{ color: 'var(--accent)' }} /> Programming Hero · Batch 13
            </div>
          </div>
          <div className="hero-actions">
            <button onClick={() => setActiveSection('contact')} className="btn-primary">INITIATE CONTACT</button>
            <button onClick={() => setActiveSection('projects')} className="btn-ghost">VIEW PROJECTS</button>
          </div>
        </div>

        <div className="hero-image-side">
          <div className="profile-wrapper">
            {/* Mobile Tags */}
            <div className="mobile-tag top-left">OPEN FOR COLLABORATION</div>
            <div className="mobile-tag top-right">FULL-STACK ENGINEER</div>
            
            <img 
              src="/assets/profile.png" 
              alt="Ahadun Nobi" 
              className="profile-img"
            />
            <div className="profile-outline"></div>
            
            {/* Desktop Tag */}
            <div className="desktop-tag desktop-only">
              FULL-STACK ENGINEER
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
