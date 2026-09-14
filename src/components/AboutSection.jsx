import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side: Empty Circular Photo Frame Slot */}
        <div className="about-frame-wrapper">
          <div className="about-photo-frame">
            <div className="about-photo-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Photo Slot</span>
            </div>
          </div>
        </div>

        {/* Right Side: About Paragraph & Neumorphic Contact Button */}
        <div className="about-content">
          <span className="about-title-tag">ABOUT</span>
          <p className="about-paragraph">
            I’m a UI/UX design student who’s curious about people, ideas, and the little details that shape an experience. I like exploring, questioning, and designing things that make sense.
          </p>

          <Link to="/contact" className="about-cta-link">
            <div className="about-btn-wrapper">
              <Button className="about-contact-btn">
                Contact Me
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
