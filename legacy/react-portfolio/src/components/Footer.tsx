import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-fix">
      <div className="container footer-container">
        <p className="footer-copyright">
          © {new Date().getFullYear()} <span className="accent-text">AHADUN NOBI</span> — ENGINEERED INDIVIDUALLY
        </p>
        <div className="footer-tech-info">
          <p>CORE <span className="accent-text">REACT</span></p>
          <p>REFINED <span className="accent-text">LOGIC</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
