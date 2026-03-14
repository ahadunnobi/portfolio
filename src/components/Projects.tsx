import './Projects.css'

const Projects = () => {
  const projects = [
    { title: 'Cloud Command System', tag: 'NODE.JS · 2026', img: '/assets/project-dev-command.png', stack: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Global Issue Tracker', tag: 'TYPESCRIPT · 2025', img: '/assets/project-github-issues.png', stack: ['Express', 'RESTful API', 'Vite'] },
    { title: 'Job Analytics Engine', tag: 'FULLSTACK · 2026', img: '/assets/project-job-tracker.png', stack: ['React', 'Firebase', 'CSS3'] }
  ]

  return (
    <div className="section-content-wrapper" style={{ overflow: 'hidden' }}>
      <p className="section-label" style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}>// 04 · PROJECTS</p>
      <h2 className="projects-title" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.22rem)', fontWeight: 800 }}>Strategic Builds</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', width: '100%' }}>
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent2)', letterSpacing: '0.2em', border: '1px solid rgba(96,240,200,0.3)', padding: '0.3rem 0.6rem', display: 'inline-block', marginBottom: '0.75rem', fontWeight: '700' }}>{proj.tag}</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{proj.title}</h3>
            <div className="project-img-wrapper">
              <img 
                src={proj.img} 
                alt={proj.title} 
                className="project-img"
              />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
               {proj.stack.map(s => <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)', background: 'var(--surface2)', padding: '0.35rem 0.7rem', fontWeight: '600' }}>{s}</span>)}
            </div>
            <a href="#" className="btn-ghost" style={{ padding: '0.75rem 1.25rem', fontSize: '0.8rem', width: '100%', justifyContent: 'center' }}>CASE ANALYSIS →</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
