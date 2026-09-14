import './AboutHero.css'

export default function AboutHero() {
  return (
    <section className="about-hero-section">
      {/* Background Image Container with Overlay for high text contrast */}
      <div className="about-hero-bg-container">
        <img
          src="/about-bg.jpg"
          alt="Leaves texture background"
          className="about-hero-bg-img"
        />
        <div className="about-hero-overlay" />
      </div>

      {/* Main Hero Header Block featuring the 4 surrounding items tightly aligned around giant "About" */}
      <div className="about-hero-header-block">
        {/* Top Row: Left & Right Plain Text */}
        <div className="about-hero-row about-hero-top-row">
          <span className="about-hero-text-left">UI/UX DESIGN / UX RESEARCH</span>
          <span className="about-hero-text-right">WEB DESIGN / BRANDING</span>
        </div>

        {/* Massive Display Title "About" */}
        <h1 className="about-hero-giant-title">About</h1>

        {/* Bottom Row: Left Email Link & Right Resume Download Button */}
        <div className="about-hero-row about-hero-bottom-row">
          <a href="mailto:vidhiambade.uxd@gmail.com" className="about-hero-email-link">
            vidhiambade.uxd@gmail.com
          </a>

          <a
            href="/resume.pdf"
            download="Vidhi_Ambade_Resume.pdf"
            className="about-hero-download-btn"
            title="Download Resume"
            aria-label="Download Resume"
          >
            <span>Resume</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
