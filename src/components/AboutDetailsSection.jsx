import './AboutDetailsSection.css'

export default function AboutDetailsSection() {
  const educationData = [
    {
      period: '2023 — 2027',
      degree: 'B.Des. — User Experience Design',
      institution: 'Symbiosis International University',
      score: '8.0 CGPA'
    },
    {
      period: '2019 — 2021',
      degree: 'St. Paul Junior College',
      institution: '',
      score: '93%'
    },
    {
      period: '2009 — 2019',
      degree: 'Bhavan’s Vidya Mandir, Nagpur',
      institution: '',
      score: '89%'
    }
  ]

  const experienceData = [
    {
      period: 'MAY 2026 — JUL 2026',
      role: 'UI/UX & Graphic Designer',
      company: 'Z-Transform Media',
      description: 'Designed digital interfaces and visual assets while working across UI/UX and graphic design tasks.'
    },
    {
      period: 'JUN 2025 — JUL 2025',
      role: 'UI/UX Design Intern',
      company: 'Zidio Development',
      description: 'Created wireframes, prototypes, and UI layouts in Figma; collaborated with the team to refine designs and improve usability.'
    }
  ]

  return (
    <section className="about-details-section">
      <div className="about-details-container">
        
        {/* Left Column Area */}
        <div className="about-details-left">
          {/* Top-Left Main Statement */}
          <h2 className="about-main-statement">
            I like understanding people, <span className="highlight-maroon">solving messy problems</span>, and turning ideas into experiences that make sense.
          </h2>

          {/* Photo + Intro Grid */}
          <div className="about-photo-intro-grid">
            {/* Empty Frame for Photo */}
            <div className="about-photo-frame">
              <div className="about-photo-placeholder">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Add Photo Here</span>
              </div>
            </div>

            {/* Intro text beside photo */}
            <div className="about-intro-text">
              <p>
                I’m <strong>Vidhi Ambade</strong>, a <span className="highlight-maroon">UI/UX design student</span> at Symbiosis International University. I’m interested in understanding how people think and designing digital experiences around their needs.
              </p>
              <p>
                My work spans <span className="highlight-maroon">UX research, interaction design, visual design, and web design,</span> with a growing interest in building and experimenting with digital products.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="about-contact-block">
            <span className="about-section-label">CONTACT</span>
            <div className="about-contact-links">
              <a href="mailto:vidhiambade.uxd@gmail.com" className="about-contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                vidhiambade.uxd@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/vidhiambade20"
                target="_blank"
                rel="noopener noreferrer"
                className="about-contact-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="about-bottom-statement-block">
            <h3 className="about-bottom-statement">
              I’m curious about people, drawn to good interfaces, and <span className="highlight-maroon">always looking for simpler ways to solve a problem.</span>
            </h3>
          </div>
        </div>

        {/* Right Column Area */}
        <div className="about-details-right">
          
          {/* Education Block */}
          <div className="about-right-block">
            <span className="about-section-label">EDUCATION</span>
            <div className="about-timeline-list">
              {educationData.map((edu, idx) => (
                <div key={idx} className="about-timeline-item">
                  <span className="timeline-period">{edu.period}</span>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{edu.degree}</h4>
                    {edu.institution && <p className="timeline-sub">{edu.institution}</p>}
                    <span className="timeline-score">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Block */}
          <div className="about-right-block">
            <span className="about-section-label">EXPERIENCE</span>
            <div className="about-timeline-list">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="about-timeline-item">
                  <span className="timeline-period">{exp.period}</span>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{exp.role}</h4>
                    <p className="timeline-company highlight-maroon">{exp.company}</p>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills / Tools / Currently Exploring Block */}
          <div className="about-right-block about-skills-block">
            <div className="skills-group">
              <span className="about-section-label highlight-maroon">SKILLS</span>
              <p className="skills-tags">
                UX Research · UI/UX Design · Interaction Design · Wireframing · Prototyping · Visual Design · Responsive Design · Design Systems
              </p>
            </div>

            <div className="skills-group">
              <span className="about-section-label highlight-maroon">TOOLS</span>
              <p className="skills-tags">
                Figma · Illustrator · Canva · Photoshop · WordPress · Framer · Wix · Notion · Antigravity
              </p>
            </div>

            <div className="skills-group">
              <span className="about-section-label highlight-maroon">CURRENTLY EXPLORING</span>
              <p className="skills-tags">
                Vibe Coding · HTML · CSS
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
