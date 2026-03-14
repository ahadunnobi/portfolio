import './Projects.css'

const Projects = () => {
  const projects = [
    { title: 'Cloud Command System', tag: 'NODE.JS · 2026', img: '/assets/project-dev-command.png', stack: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Global Issue Tracker', tag: 'TYPESCRIPT · 2025', img: '/assets/project-github-issues.png', stack: ['Express', 'RESTful API', 'Vite'] },
    { title: 'Job Analytics Engine', tag: 'FULLSTACK · 2026', img: '/assets/project-job-tracker.png', stack: ['React', 'Firebase', 'CSS3'] }
  ]

  return (
    <div className="section-content-wrapper">
      <p className="section-label">// 04 · PROJECTS</p>
      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>Strategic Builds</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent2)', letterSpacing: '0.2em', border: '1px solid rgba(96,240,200,0.3)', padding: '0.4rem 0.8rem', display: 'inline-block', marginBottom: '1rem', fontWeight: '700' }}>{proj.tag}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{proj.title}</h3>
            <div className="project-img-wrapper">
              <img 
                src={proj.img} 
                alt={proj.title} 
                className="project-img"
              />
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
               {proj.stack.map(s => <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', background: 'var(--surface2)', padding: '0.4rem 0.8rem', fontWeight: '600' }}>{s}</span>)}
            </div>
            <a href="#" className="btn-ghost" style={{ padding: '0.8rem 1.5rem', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}>CASE ANALYSIS →</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
