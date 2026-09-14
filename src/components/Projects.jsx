import { Link } from 'react-router-dom'
import './Projects.css'

export default function Projects({ showHeader = false }) {
  const projectsData = [
    {
      id: '01',
      title: 'BUTTER & BEYOND',
      subtitle: 'UI DESIGN | KIOSK DESIGN',
      image: '/butter-and-beyond.png',
      link: '/work/butterandbeyond',
      isBlank: false
    },
    {
      id: '02',
      title: 'URBANKART',
      subtitle: 'RETAIL DASHBOARD DESIGN',
      image: '/urbankart.png',
      link: '/work/urbankart',
      isBlank: false
    },
    {
      id: '03',
      title: 'GROCERIA',
      subtitle: 'UI/UX | APP DESIGN',
      image: '/groceria.png',
      link: '/work/groceria',
      isBlank: false
    },
    {
      id: '04',
      title: 'STAY TUNED',
      subtitle: 'NEW CASE STUDY',
      image: '',
      link: '/work',
      isBlank: true
    }
  ]

  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Optional Section Header */}
        {showHeader && (
          <div className="projects-header">
            <span className="projects-tagline">My Recent</span>
            <h2 className="projects-title">WORKS</h2>
          </div>
        )}

        {/* 4 Expanding Accordion Cards */}
        <div className="projects-accordion">
          {projectsData.map((project) => (
            project.isBlank ? (
              <div key={project.id} className="project-card project-card-blank">
                <span className="project-card-tag">{project.id}</span>
                <div className="blank-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
                <div className="project-card-info">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-subtitle">{project.subtitle}</p>
                </div>
              </div>
            ) : (
              <Link key={project.id} to={project.link} className="project-card">
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-bg"
                />

                {/* Dark Overlay */}
                <div className="project-card-overlay"></div>

                {/* Number Tag */}
                <span className="project-card-tag">{project.id}</span>

                {/* Content Overlay */}
                <div className="project-card-content">
                  <div className="project-card-info">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-subtitle">{project.subtitle}</p>
                  </div>
                  <div className="project-card-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
