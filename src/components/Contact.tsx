import { Mail, Linkedin, Github, Phone, Facebook } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const contactItems = [
    { icon: <Mail size={24} />, label: 'OFFICIAL EMAIL', value: 'info.ahadunnobi@gmail.com', href: 'mailto:info.ahadunnobi@gmail.com' },
    { icon: <Linkedin size={24} />, label: 'PROFESSIONAL HUB', value: 'linkedin.com/in/ahadunnobi', href: 'https://www.linkedin.com/in/ahadunnobi' },
    { icon: <Github size={24} />, label: 'VERSION CONTROL', value: 'github.com/ahadunnobi', href: 'https://github.com/ahadunnobi' },
    { icon: <Phone size={24} />, label: 'ESTABLISH VOICE', value: '+8801731065967', href: 'tel:+8801731065967' },
    { icon: <Facebook size={24} />, label: 'SOCIAL BRIDGE', value: 'facebook.com/ahadunnobe', href: 'https://facebook.com/ahadunnobe' }
  ]

  return (
    <div className="section-content-wrapper">
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
        <div>
          <p className="section-label">// 05 · CONTACT</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.05em', marginBottom: '1rem' }}>Let's<br />build<br /><span style={{ color: 'var(--accent)' }}>together.</span></h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: '400', maxWidth: '440px' }}>Open for Full-Stack opportunities and strategic technology partnerships. Engineering quality through architectural intelligence.</p>
          <a href="mailto:info.ahadunnobi@gmail.com" className="btn-primary">ESTABLISH CHANNEL</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {contactItems.map((item, i) => (
            <a key={i} href={item.href} className="contact-link">
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
  )
}

export default Contact
