import './Experience.css'

const Experience = () => {
  return (
    <div className="section-content-wrapper" style={{ maxWidth: '1100px' }}>
      <p className="section-label">// 03 · EXPERIENCE</p>
      <h2 style={{ fontSize: ' clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>Professional Record</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {[
          { date: '2024–2025', role: 'Billing Executive', company: 'LAZZ PHARMA', desc: 'Managed high-concurrency digital billing and pharmaceutical inventory tracking.' },
          { date: '2022–2025', role: 'Cadet Sergeant', company: 'BNCC ARMY WING', desc: 'Commanded platoon exercises and operational logistics as a high-ranking cadet officer.' },
          { date: '2019–2022', role: 'ICT Consultant', company: 'SCIENCE EXPLORER', desc: 'Formulated digital education strategies and managed cloud infrastructure.' }
        ].map((exp, i) => (
          <div key={i} className="experience-item">
            <div className="experience-date">{exp.date}</div>
            <div>
              <div className="experience-role">{exp.role}</div>
              <div className="experience-company">{exp.company}</div>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#9a9790' }}>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
