import './Experience.css'

const Experience = () => {
  return (
    <div className="section-content-wrapper" style={{ overflowX: 'hidden' }}>
      <p className="section-label" style={{ marginBottom: '0.4rem' }}>// 03 · EXPERIENCE</p>
      <h2 className="experience-title" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', fontWeight: 800, marginBottom: '0.75rem' }}>Professional Record</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '100%' }}>
        {[
          { date: '2024–2025', role: 'Billing Executive', company: 'LAZZ PHARMA', desc: 'Expertly managed high-concurrency digital billing systems and pharmaceutical inventory tracking, ensuring 100% data integrity.' },
          { date: '2022–2025', role: 'Senior Cadet Sergeant', company: 'BNCC ARMY WING', desc: 'Distinguished leadership and tactical command of platoon exercises, overseeing complex operational logistics and personnel management.' },
          { date: '2019–2022', role: 'ICT Consultant', company: 'SCIENCE EXPLORER', desc: 'Architected innovative digital education strategies and scaled cloud-native infrastructure to support institutional requirements.' }
        ].map((exp, i) => (
          <div key={i} className="experience-item" style={{ padding: '0.6rem 0' }}>
            <div className="experience-date" style={{ fontSize: '0.75rem' }}>{exp.date}</div>
            <div>
              <div className="experience-role" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{exp.role}</div>
              <div className="experience-company" style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>{exp.company}</div>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#9a9790' }}>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
