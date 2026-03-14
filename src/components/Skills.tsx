import React from 'react'
import { Globe, Settings, Briefcase, Award } from 'lucide-react'
import './Skills.css'

interface Skill {
  name: string
  color: string
  textColor?: string
  border?: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend & UI',
      icon: <Globe size={20} />,
      skills: [
        { name: '🌐 HTML5', color: '#E34F26' },
        { name: '🎨 CSS3', color: '#1572B6' },
        { name: '🟨 JAVASCRIPT', color: '#F7DF1E', textColor: '#000' },
        { name: '⚡ VITE', color: '#646CFF' },
        { name: '⚛️ REACT', color: '#61DAFB', textColor: '#000' },
        { name: 'NEXT.JS', color: '#000000' },
        { name: '💨 TAILWIND CSS', color: '#06B6D4' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Settings size={20} />,
      skills: [
        { name: '🟢 NODE.JS', color: '#339933' },
        { name: '🚂 EXPRESS.JS', color: '#000000' },
        { name: '🍃 MONGODB', color: '#47A248' },
        { name: '🔥 FIREBASE', color: '#FFCA28', textColor: '#000' },
        { name: 'JWT', color: '#000000' },
        { name: 'REST API', color: '#0055D4' }
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: <Briefcase size={20} />,
      skills: [
        { name: 'GIT', color: '#F05032' },
        { name: '🐙 GITHUB', color: '#181717' },
        { name: 'VS CODE', color: '#007ACC' },
        { name: 'NPM', color: '#CB3837' },
        { name: 'VERCEL', color: '#000000' },
        { name: '🤖 GOOGLE AI', color: '#4285F4' }
      ]
    },
    {
      title: 'Professional Skills',
      icon: <Award size={20} />,
      skills: [
        { name: '💬 COMMUNICATION', color: 'var(--surface2)', border: '1px solid var(--border)' },
        { name: '🧩 PROBLEM SOLVING', color: 'var(--surface2)', border: '1px solid var(--border)' },
        { name: '👥 TEAM LEADERSHIP', color: 'var(--surface2)', border: '1px solid var(--border)' },
        { name: '📊 FINANCIAL ANALYSIS', color: 'var(--surface2)', border: '1px solid var(--border)' }
      ]
    }
  ]

  return (
    <div className="section-content-wrapper">
      <p className="section-label">// 02 · SKILLS</p>
      <h2 className="skills-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 800 }}>Technical Arsenal</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className={`stat-card ${idx === 3 ? 'card-professional' : ''}`} 
            style={{ 
              padding: '1.5rem', 
              display: 'flex', 
              flexDirection: 'column' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--accent)' }}>{category.icon}</span>
              <h3 style={{ fontSize: '0.9rem', color: 'var(--text)', fontWeight: '800', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {category.title}
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'flex-start' }}>
              {category.skills.map((skill, i) => (
                <div 
                  key={i} 
                  className={`skill-pill ${idx === 2 ? 'skill-pill-small' : ''}`}
                  style={{ 
                    color: skill.textColor || '#fff', 
                    background: skill.color, 
                    border: skill.border || 'none'
                  }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
