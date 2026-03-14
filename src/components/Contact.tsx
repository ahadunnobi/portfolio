import React from 'react'
import { Mail, Linkedin, Github, Phone, Facebook } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const contactItems = [
    { icon: <Mail size={20} />, label: 'OFFICIAL EMAIL', value: 'info.ahadunnobi@gmail.com', href: 'mailto:info.ahadunnobi@gmail.com' },
    { icon: <Linkedin size={20} />, label: 'PROFESSIONAL HUB', value: 'linkedin.com/in/ahadunnobi', href: 'https://www.linkedin.com/in/ahadunnobi' },
    { icon: <Github size={20} />, label: 'VERSION CONTROL', value: 'github.com/ahadunnobi', href: 'https://github.com/ahadunnobi' },
    { icon: <Phone size={20} />, label: 'ESTABLISH VOICE', value: '+8801610-176181', href: 'tel:+8801610-176181' },
    { icon: <Facebook size={20} />, label: 'SOCIAL BRIDGE', value: 'facebook.com/ahadunnobe', href: 'https://facebook.com/ahadunnobe' }
  ]

  return (
    <div className="section-content-wrapper">
      <div className="contact-grid-container">
        <div>
          <p className="section-label" style={{ marginBottom: '0.6rem', marginTop: '0.5rem' }}>// 05 · CONTACT</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Let's build <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>together.</span></h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: '400', maxWidth: '440px' }}>Open for Full-Stack opportunities and strategic technology partnerships. Engineering quality through architectural intelligence.</p>
          <a href="mailto:info.ahadunnobi@gmail.com" className="btn-primary" style={{ padding: '0.9rem 1.8rem', fontSize: '0.85rem' }}>ESTABLISH CHANNEL</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {contactItems.map((item, i) => (
            <a key={i} href={item.href} className="contact-link">
              <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center' }}>
                {item.icon}
              </div>
              <div>
                <span style={{ color: 'var(--muted)', fontSize: '0.75rem', display: 'block', letterSpacing: '0.15em', fontWeight: '800', marginBottom: '0.3rem', textTransform: 'uppercase' }}>{item.label}</span>
                <span style={{ fontWeight: '700', fontSize: '1.05rem' }}>{item.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
