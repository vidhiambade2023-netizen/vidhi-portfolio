import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './ButterAndBeyond.css'

export default function ButterAndBeyond() {
  const [activeSection, setActiveSection] = useState('01')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToSection = (id, num) => {
    setActiveSection(num)
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const figmaProtoUrl = "https://www.figma.com/proto/a7TSlTO2YB5DIqEWc23MLv/iaux-bakery-kiosk?node-id=69-102&p=f&viewport=92%2C-70%2C0.09&t=p2aVNSAq95yEVI19-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=69%3A102&page-id=0%3A1"
  const figmaEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaProtoUrl)}`

  const sectionsList = [
    { id: 'section-01', num: '01', title: 'Project Intro' },
    { id: 'section-02', num: '02', title: 'Brief' },
    { id: 'section-03', num: '03', title: 'Context' },
    { id: 'section-04', num: '04', title: 'Design Approach & Focus' },
    { id: 'section-05', num: '05', title: 'Visual Identity' },
    { id: 'section-06', num: '06', title: 'Interactive Prototype' },
    { id: 'section-07', num: '07', title: 'The Experience' },
    { id: 'section-08', num: '08', title: 'Outcome & Reflection' },
  ]

  return (
    <div className="bb-page">
      <Header />

      <main className="bb-main">
        {/* Top Navigation Back Link */}
        <div className="bb-back-container">
          <Link to="/work" className="bb-back-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Work
          </Link>
        </div>

        {/* Cover Hero Header Section */}
        <section className="bb-cover-section">
          <div className="bb-container bb-cover-container">
            <h1 className="bb-giant-cover-title">
              Butter & <span className="highlight-maroon">Beyond</span>
            </h1>

            {/* Table of Contents Index Menu */}
            <div className="bb-index-menu-wrapper">
              <div className="bb-index-menu-line" />
              <div className="bb-index-menu">
                {sectionsList.map((sec) => (
                  <button
                    key={sec.num}
                    className={`bb-index-item ${activeSection === sec.num ? 'active' : ''}`}
                    onClick={() => scrollToSection(sec.id, sec.num)}
                  >
                    <span className="bb-index-title">{sec.title}</span>
                    <span className="bb-index-num">{sec.num}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="bb-divider" />

        {/* ================= 01 PROJECT INTRO ================= */}
        <section id="section-01" className="bb-section bb-intro-section">
          <div className="bb-container">
            <div className="bb-section-tag">01 PROJECT INTRO</div>
            
            <h2 className="bb-hero-title">
              BAKERY <span className="highlight-maroon">KIOSK</span>
            </h2>
            
            <h3 className="bb-hero-subtitle">
              Touchscreen ordering experience for a bakery
            </h3>

            <p className="bb-hero-desc">
              A digital kiosk designed to make browsing and ordering bakery products quick, simple, and intuitive.
            </p>

            {/* Meta Grid */}
            <div className="bb-meta-grid">
              <div className="bb-meta-item">
                <span className="bb-meta-label">ROLE</span>
                <span className="bb-meta-val">UI/UX Designer</span>
              </div>
              <div className="bb-meta-item">
                <span className="bb-meta-label">DURATION</span>
                <span className="bb-meta-val">2 weeks</span>
              </div>
              <div className="bb-meta-item">
                <span className="bb-meta-label">PLATFORM</span>
                <span className="bb-meta-val">Touchscreen Kiosk</span>
              </div>
              <div className="bb-meta-item">
                <span className="bb-meta-label">TYPE</span>
                <span className="bb-meta-val">Academic / UI Design Project</span>
              </div>
            </div>

            {/* Horizontal Hero Banner (Croissants counter photo - Image 2) */}
            <div className="bb-hero-banner-horizontal">
              <img
                src="/bb_assets/bb_hero_counter.png"
                alt="Artisanal Bakery Counter Display"
                className="bb-hero-img-horizontal bb-hd-image"
              />
            </div>
          </div>
        </section>

        <div className="bb-divider" />

        {/* ================= 02 BRIEF ================= */}
        <section id="section-02" className="bb-section">
          <div className="bb-container">
            <div className="bb-section-tag">02 BRIEF</div>
            
            <div className="bb-editorial-grid bb-3col">
              <div className="bb-editorial-col">
                <h3 className="bb-col-heading">THE <span className="highlight-maroon">BRIEF</span></h3>
                <p className="bb-text">
                  Design a touchscreen kiosk experience for a bakery that allows customers to browse products and place orders with minimal effort.
                </p>
                <p className="bb-text">
                  The interface needed to work for a wide range of users, including people unfamiliar with digital kiosks.
                </p>
              </div>

              <div className="bb-editorial-col">
                <h3 className="bb-col-heading">SCOPE OF <span className="highlight-maroon">WORK</span></h3>
                <ul className="bb-scope-list">
                  <li>Information architecture</li>
                  <li>User flow</li>
                  <li>Wireframing</li>
                  <li>UI design</li>
                  <li>Visual identity</li>
                  <li>Interactive prototype</li>
                </ul>
              </div>

              <div className="bb-editorial-col">
                <h3 className="bb-col-heading">DESIGN <span className="highlight-maroon">OUTCOME</span></h3>
                <p className="bb-text">
                  A warm, food-focused ordering kiosk combining high accessibility, large touch zones, and direct visual category discovery for fast-paced bakery environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bb-divider" />

        {/* ================= 03 CONTEXT ================= */}
        <section id="section-03" className="bb-section">
          <div className="bb-container">
            <div className="bb-section-tag">03 CONTEXT</div>
            
            <h3 className="bb-col-heading">THE <span className="highlight-maroon">CONTEXT</span></h3>
            <div className="bb-text-block">
              <p className="bb-text">
                Bakery kiosks are used in fast-paced environments where customers need to understand their options and complete an order quickly.
              </p>
              <p className="bb-text">
                The interface therefore needed to be easy to scan, simple to navigate, and comfortable to use through touch.
              </p>
            </div>
          </div>
        </section>

        <div className="bb-divider" />

        {/* ================= 04 DESIGN APPROACH & FOCUS ================= */}
        <section id="section-04" className="bb-section">
          <div className="bb-container">
            <div className="bb-section-tag">04 DESIGN APPROACH & FOCUS</div>
            
            <h3 className="bb-col-heading">DESIGN <span className="highlight-maroon">APPROACH</span></h3>
            <div className="bb-text-block bb-mb-xl">
              <p className="bb-text">
                The design focuses on reducing friction at every step of the ordering process.
              </p>
              <p className="bb-text">
                I used clear information hierarchy, large touch targets, familiar interactions, and minimal navigation to help users move from browsing to ordering without unnecessary steps.
              </p>
            </div>

            <div className="bb-focus-grid">
              <div className="bb-focus-card">
                <span className="bb-focus-num">01</span>
                <h3 className="bb-focus-title">Clear visual hierarchy</h3>
                <p className="bb-focus-desc">Guide attention towards products and key actions.</p>
              </div>

              <div className="bb-focus-card">
                <span className="bb-focus-num">02</span>
                <h3 className="bb-focus-title">Touch-friendly interactions</h3>
                <p className="bb-focus-desc">Use large, accessible elements designed for touchscreen use.</p>
              </div>

              <div className="bb-focus-card">
                <span className="bb-focus-num">03</span>
                <h3 className="bb-focus-title">Fewer steps</h3>
                <p className="bb-focus-desc">Keep the ordering journey short and straightforward.</p>
              </div>

              <div className="bb-focus-card">
                <span className="bb-focus-num">04</span>
                <h3 className="bb-focus-title">Readable interface</h3>
                <p className="bb-focus-desc">Use strong contrast and typography that remains easy to read in a public setting.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bb-divider" />

        {/* ================= 05 VISUAL IDENTITY ================= */}
        <section id="section-05" className="bb-section">
          <div className="bb-container">
            <div className="bb-section-tag">05 VISUAL IDENTITY</div>
            
            <h3 className="bb-col-heading">VISUAL <span className="highlight-maroon">IDENTITY</span></h3>

            {/* Typography Specimen */}
            <div className="bb-type-grid">
              <div className="bb-type-card">
                <span className="bb-type-tag">DISPLAY TYPEFACE</span>
                <h3 className="bb-font-name font-kalnia">KALNIA</h3>
                <div className="bb-font-specimen font-kalnia">
                  Aa Bb Cc 123
                </div>
                <p className="bb-font-desc">Used for expressive bakery headlines and major category branding.</p>
              </div>

              <div className="bb-type-card">
                <span className="bb-type-tag">INTERFACE TYPEFACE</span>
                <h3 className="bb-font-name font-nunito">NUNITO SANS</h3>
                <div className="bb-font-specimen font-nunito">
                  Aa Bb Cc 123
                </div>
                <p className="bb-font-desc">Used for high legibility product list titles, buttons, and prices.</p>
              </div>
            </div>

            {/* Color Palette Cards */}
            <h3 className="bb-subsection-heading">COLOUR PALETTE</h3>
            <div className="bb-color-grid">
              
              {/* Buttery White */}
              <div className="bb-color-card">
                <div className="bb-color-swatch swatch-white">
                  <span className="bb-swatch-title dark-text">BUTTERY WHITE</span>
                </div>
                <div className="bb-color-meta">
                  <div className="bb-meta-row">
                    <span className="bb-c-label">HEX</span>
                    <span className="bb-c-val">#FAF2DE</span>
                  </div>
                  <div className="bb-meta-row">
                    <span className="bb-c-label">RGB</span>
                    <span className="bb-c-val">250, 242, 222</span>
                  </div>
                  <div className="bb-meta-row">
                    <span className="bb-c-label">CMYK</span>
                    <span className="bb-c-val">0, 3, 11, 2</span>
                  </div>
                </div>
              </div>

              {/* Rust Orange */}
              <div className="bb-color-card">
                <div className="bb-color-swatch swatch-orange">
                  <span className="bb-swatch-title light-text">RUST ORANGE</span>
                </div>
                <div className="bb-color-meta">
                  <div className="bb-meta-row">
                    <span className="bb-c-label">HEX</span>
                    <span className="bb-c-val">#A94310</span>
                  </div>
                  <div className="bb-meta-row">
                    <span className="bb-c-label">RGB</span>
                    <span className="bb-c-val">169, 67, 16</span>
                  </div>
                  <div className="bb-meta-row">
                    <span className="bb-c-label">CMYK</span>
                    <span className="bb-c-val">0, 60, 91, 34</span>
                  </div>
                </div>
              </div>

              {/* Coffee */}
              <div className="bb-color-card">
                <div className="bb-color-swatch swatch-coffee">
                  <span className="bb-swatch-title light-text">COFFEE</span>
                </div>
                <div className="bb-color-meta">
                  <div className="bb-meta-row">
                    <span className="bb-c-label">HEX</span>
                    <span className="bb-c-val">#5C1F01</span>
                  </div>
                  <div className="bb-meta-row">
                    <span className="bb-c-label">RGB</span>
                    <span className="bb-c-val">92, 31, 1</span>
                  </div>
                  <div className="bb-meta-row">
                    <span className="bb-c-label">CMYK</span>
                    <span className="bb-c-val">0, 66, 99, 64</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Design Direction */}
            <div className="bb-direction-box">
              <h4 className="bb-direction-title">DESIGN DIRECTION</h4>
              <p className="bb-direction-text">
                Warm, approachable, and food-focused using earthy tones and expressive typography to give the kiosk a bakery-like character while keeping the interface clear.
              </p>
            </div>

          </div>
        </section>

        <div className="bb-divider" />

        {/* ================= 06 INTERACTIVE PROTOTYPE ================= */}
        <section id="section-06" className="bb-section">
          <div className="bb-container">
            <div className="bb-section-tag">06 INTERACTIVE PROTOTYPE</div>
            
            <div className="bb-proto-header">
              <div>
                <h3 className="bb-col-heading bb-mb-sm">INTERACTIVE <span className="highlight-maroon">PROTOTYPE</span></h3>
                <p className="bb-text">Experience the live touchscreen kiosk ordering flow below.</p>
              </div>

              <a 
                href={figmaProtoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bb-proto-external-btn"
              >
                Open Fullscreen Prototype ↗
              </a>
            </div>

            <div className="bb-proto-wrapper">
              <iframe
                title="Bakery Kiosk Interactive Prototype"
                className="bb-proto-iframe"
                src={figmaEmbedUrl}
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <div className="bb-divider" />

        {/* ================= 07 THE EXPERIENCE ================= */}
        <section id="section-07" className="bb-section">
          <div className="bb-container">
            <div className="bb-section-tag">07 THE EXPERIENCE</div>
            
            <h3 className="bb-col-heading">THE <span className="highlight-maroon">EXPERIENCE</span></h3>
            <h4 className="bb-headline-sub">Browse. Choose. <span className="highlight-maroon">Order.</span></h4>
            
            <p className="bb-text bb-mb-xl">
              The interface brings product discovery, selection, and ordering into one straightforward touchscreen experience.
            </p>

            {/* Hand-held Tablet Kiosk Mockup Showcase */}
            <div className="bb-experience-showcase">
              <img
                src="/bb_assets/bb_mockup_hand_tablet.jpg"
                alt="Butter & Beyond Kiosk Tablet Experience"
                className="bb-showcase-img bb-hd-image"
              />
            </div>
          </div>
        </section>

        <div className="bb-divider" />

        {/* ================= 08 OUTCOME & REFLECTION ================= */}
        <section id="section-08" className="bb-section">
          <div className="bb-container">
            <div className="bb-section-tag">08 OUTCOME & REFLECTION</div>
            
            <div className="bb-editorial-grid bb-2col">
              <div className="bb-editorial-col">
                <h3 className="bb-col-heading">THE <span className="highlight-maroon">RESULT</span></h3>
                <p className="bb-text">
                  A touchscreen ordering experience designed around clarity, speed, and ease of interaction.
                </p>
                <p className="bb-text">
                  The final interface combines a warm bakery-inspired visual identity with a simple interaction structure suited to public touchscreen use.
                </p>
              </div>

              <div className="bb-editorial-col">
                <h3 className="bb-col-heading">WHAT I <span className="highlight-maroon">LEARNED</span></h3>
                <p className="bb-text">
                  Designing for a touchscreen changed the way I approached interaction.
                </p>
                <p className="bb-text">
                  Every element needed to be easy to see, easy to understand, and easy to tap. It pushed me to think beyond visual aesthetics and consider how people actually move through an interface.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
