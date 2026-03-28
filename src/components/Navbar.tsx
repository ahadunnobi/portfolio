import { motion } from 'framer-motion'
import { Github, Linkedin, Facebook, Instagram, Home, Info, Code2, Briefcase, Folder, Mail } from 'lucide-react'
import './Navbar.css'

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  sections: { id: string, label: string }[]
}

const Navbar = ({ activeSection, setActiveSection, sections }: NavbarProps) => {
  const getIcon = (id: string, size = 18) => {
    switch (id) {
      case 'hero': return <Home size={size} />;
      case 'about': return <Info size={size} />;
      case 'skills': return <Code2 size={size} />;
      case 'experience': return <Briefcase size={size} />;
      case 'projects': return <Folder size={size} />;
      case 'contact': return <Mail size={size} />;
      default: return null;
    }
  };

  return (
    <>
      <nav className="nav-fix">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div 
            style={{ cursor: 'pointer', height: '36px', display: 'flex', alignItems: 'center' }}
            onClick={() => setActiveSection('hero')}
          >
            <img src="/assets/navbar-logo.png" alt="Ahad" style={{ height: '100%', width: 'auto', filter: 'invert(1) brightness(1.5)' }} />
          </div>

          <div className="nav-menu" style={{ display: 'flex', gap: '3.5rem', listStyle: 'none', alignItems: 'center', flex: 1, marginLeft: '6rem' }}>
            {sections.slice(1).map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
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

          <div className="nav-socials" style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            <a href="https://github.com/ahadunnobi" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.4s' }}><Github size={22} /></a>
            <a href="https://linkedin.com/in/ahadunnobi" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.4s' }}><Linkedin size={22} /></a>
            <a href="https://facebook.com/ahadunnobe" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.4s' }}><Facebook size={22} /></a>
            <a href="https://instagram.com/ahadunnobi" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.4s' }}><Instagram size={22} /></a>
          </div>
        </div>
      </nav>

      {/* Mobile Aside Navigation */}
      <div className="mobile-asides">
        <div className="aside-left">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`aside-nav-item ${activeSection === section.id ? 'active' : ''}`}
            >
              {getIcon(section.id, 20)}
            </button>
          ))}
        </div>
        <div className="aside-right">
          <a href="https://github.com/ahadunnobi" target="_blank" rel="noopener noreferrer" className="aside-social-link"><Github size={20} /></a>
          <a href="https://linkedin.com/in/ahadunnobi" target="_blank" rel="noopener noreferrer" className="aside-social-link"><Linkedin size={20} /></a>
          <a href="https://instagram.com/ahadunnobi" target="_blank" rel="noopener noreferrer" className="aside-social-link"><Instagram size={20} /></a>
          <a href="https://facebook.com/ahadunnobe" target="_blank" rel="noopener noreferrer" className="aside-social-link"><Facebook size={20} /></a>
        </div>
      </div>
    </>
  )
}

export default Navbar
