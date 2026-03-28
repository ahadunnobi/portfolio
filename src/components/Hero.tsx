import { MapPin, Zap } from 'lucide-react'
import './Hero.css'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero = ({ setActiveSection }: HeroProps) => {
  return (
    <div className="section-content-wrapper">
      {/* Desktop Layout */}
      <div className="hero-grid desktop-only-flex">
        <div className="hero-text-side">
          <div className="hero-tag-wrap">
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
            <img 
              src="/assets/profile.png" 
              alt="Ahadun Nobi" 
              className="profile-img"
            />
            <div className="profile-outline"></div>
            <div className="desktop-tag">
              FULL-STACK ENGINEER
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Precision Layout */}
      <div className="hero-mobile-precision mobile-only-flex">
        <div className="mobile-collab-tag">OPEN FOR COLLABORATION</div>
        
        <div className="profile-wrapper-mobile">
          <img 
            src="/assets/profile.png" 
            alt="Ahadun Nobi" 
            className="profile-img-mobile"
          />
          <div className="profile-outline-mobile"></div>
        </div>

        <div className="mobile-engineer-tag">FULL-STACK ENGINEER</div>

        <h1 className="hero-title-mobile">
          Ahadun <span style={{ color: 'var(--accent)' }}>Nobi</span>
        </h1>

        <p className="hero-desc-mobile">
          Full-Stack Architect scaling professional digital solutions with <span style={{ color: 'var(--text)' }}>React, Node.js, Express, and MongoDB</span>.
        </p>

        <div className="hero-stats-mobile">
          <div className="hero-stat-item-mobile">
            <MapPin size={16} style={{ color: 'var(--accent)' }} /> Chattogram, BD
          </div>
          <div className="hero-stat-item-mobile">
            <Zap size={16} style={{ color: 'var(--accent)' }} /> PH Batch 13
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
