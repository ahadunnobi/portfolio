import './Footer.css'

const Footer = () => {
  return (
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
  )
}

export default Footer
