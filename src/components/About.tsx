import './About.css'

const About = () => {
  return (
    <div className="section-content-wrapper">
      <p className="section-label">// 01 · ABOUT</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1.5rem', alignItems: 'center', marginTop: '0' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', marginBottom: '0.75rem', lineHeight: 1.1 }}>Engineering logic<br />with <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>human intent</span>.</h2>
          <div style={{ fontSize: '1rem', lineHeight: '1.6', color: '#b0ada6' }}>
            <p style={{ marginBottom: '0.4rem' }}>
              I specialize in the <strong style={{ color: 'var(--text)' }}>Modern Web Ecosystem</strong>, constructing robust platforms that prioritize performance and structural integrity. My technical philosophy is built on the belief that complex systems should feel effortless.
            </p>
            <p style={{ marginBottom: '0.4rem' }}>
              Applying first-principles thinking from my philosophical background, I design architectures that solve fundamental problems with mathematical precision.
            </p>
            <p>
              Currently advancing through <strong style={{ color: 'var(--text)' }}>Programming Hero</strong>, mastering cloud-native workflows and high-concurrency software development.
            </p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            { num: '06+', label: 'DEPLOYED PLATFORMS' },
            { num: '03', label: 'ACCREDITATIONS' },
            { num: '03', label: 'TECH SEGMENTS' },
            { num: 'SGT', label: 'LEADERSHIP RANK' }
          ].map((stat, i) => (
            <div key={i} className="stat-card" style={{ padding: '1.25rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.4rem' }}>{stat.num}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--muted)', letterSpacing: '0.2em', fontWeight: '700' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
