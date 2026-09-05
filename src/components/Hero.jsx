import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* Left Column */}
        <div className="hero-left">
          <div className="hero-tag">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
            UI/UX Designer & Researcher
          </div>

          <h1 className="hero-headline">
            I design digital experiences that make complex things feel simple.
          </h1>

          <p className="hero-headline-sub">
            Turning research, systems, and ideas into intuitive interfaces that balance clarity, usability, and visual craft.
          </p>

          <p className="hero-subhead">
            UI/UX design student focused on UX research, interaction design, and thoughtful digital experiences.
          </p>

          <Link to="/work" className="hero-cta">
            <Button className="hero-btn">
              See selected work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Button>
          </Link>
        </div>

        {/* Right Column */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img
              src="/hero.jpg"
              alt="Vidhi - UI/UX Designer"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
