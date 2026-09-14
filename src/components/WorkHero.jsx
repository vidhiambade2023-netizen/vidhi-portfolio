import './WorkHero.css'

export default function WorkHero() {
  return (
    <section className="work-hero-section">
      <div className="work-hero-container">
        {/* "My recent" in smaller serif italics */}
        <span className="work-hero-tagline">My recent</span>

        {/* "WORKS" in giant ALL CAPS display font with liquid maroon glass distortion animation */}
        <h1 className="work-hero-giant-title">WORKS</h1>
      </div>
    </section>
  )
}
