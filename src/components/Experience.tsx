import './Experience.css'

const Experience = () => {
  return (
    <div className="section-content-wrapper">
      <p className="section-label" style={{ marginBottom: '0.5rem' }}>// 03 · EXPERIENCE</p>
      <h2 className="experience-title" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: '1rem' }}>Professional Record</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', width: '100%' }}>
        {[
          { date: '2024–2025', role: 'Billing Executive', company: 'LAZZ PHARMA', desc: 'Expertly managed high-concurrency digital billing systems and pharmaceutical inventory tracking, ensuring 100% data integrity in high-pressure environments.' },
          { date: '2022–2025', role: 'Cadet Sergeant', company: 'BNCC ARMY WING', desc: 'Distinguished leadership and tactical command of platoon exercises, overseeing complex operational logistics and personnel management as a high-ranking officer.' },
          { date: '2019–2022', role: 'ICT Consultant', company: 'SCIENCE EXPLORER', desc: 'Architected innovative digital education strategies and scaled cloud-native infrastructure to support growing institutional requirements.' }
        ].map((exp, i) => (
          <div key={i} className="experience-item">
            <div className="experience-date">{exp.date}</div>
            <div>
              <div className="experience-role">{exp.role}</div>
              <div className="experience-company">{exp.company}</div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#9a9790' }}>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
