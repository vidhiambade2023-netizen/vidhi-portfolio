import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Headline with slightly smaller font size for line 3 */}
        <h1 className="hero-headline">
          I’m <span className="serif-italic">Vidhi</span>
          <span className="hero-frame-rect">
            <img src="/vidhi.jpg" alt="Vidhi portrait" className="hero-frame-img" />
          </span>,
          <br />
          a <span className="maroon-text">UX</span>
          <span className="hero-frame-rect">
            <img src="/sphere.gif" alt="Particle Sphere GIF" className="hero-frame-img" />
          </span>
          <span className="serif-italic maroon-text">Designer</span>,
          <br />
          <span className="hero-headline-line3">
            who designs for <span className="serif-italic">people</span>
          </span>
        </h1>

        {/* Subhead */}
        <p className="hero-subhead">
          UI/UX design student focused on UX research, interaction design, and thoughtful digital experiences.
        </p>

        {/* Neumorphic Pill Button */}
        <Link to="/work" className="hero-cta">
          <div className="hero-btn-wrapper">
            <Button className="hero-view-work-btn">
              View my Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Button>
          </div>
        </Link>
      </div>
    </section>
  )
}
