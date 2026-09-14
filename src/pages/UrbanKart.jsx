import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './UrbanKart.css'

export default function UrbanKart() {
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

  const figmaProtoUrl = "https://www.figma.com/proto/pa4LDnvaATNEBDTir7Wzmy/urbankart?node-id=218-2405&viewport=376%2C188%2C0.17&t=iRNYyjqaivYZGn9X-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=274%3A2797&page-id=218%3A2404"
  const figmaEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaProtoUrl)}`

  const sectionsList = [
    { id: 'section-01', num: '01', title: 'Project Intro' },
    { id: 'section-02', num: '02', title: 'Brief & Scope' },
    { id: 'section-03', num: '03', title: 'The Problem' },
    { id: 'section-04', num: '04', title: 'Users & Personas' },
    { id: 'section-05', num: '05', title: 'Design Approach' },
    { id: 'section-06', num: '06', title: 'Information Architecture' },
    { id: 'section-07', num: '07', title: 'Design Focus' },
    { id: 'section-08', num: '08', title: 'Wireframes' },
    { id: 'section-09', num: '09', title: 'Visual Direction' },
    { id: 'section-10', num: '10', title: 'Interactive Prototype' },
    { id: 'section-11', num: '11', title: 'The Experience' },
    { id: 'section-12', num: '12', title: 'Outcome & Reflection' },
  ]

  return (
    <div className="uk-page">
      <Header />

      <main className="uk-main">
        {/* Top Navigation Back Link */}
        <div className="uk-back-container">
          <Link to="/work" className="uk-back-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Work
          </Link>
        </div>

        {/* Cover Hero Header Section */}
        <section className="uk-cover-section">
          <div className="uk-container uk-cover-container">
            <h1 className="uk-giant-cover-title">
              Urban<span className="highlight-maroon">Kart</span>
            </h1>

            {/* Table of Contents Index Menu */}
            <div className="uk-index-menu-wrapper">
              <div className="uk-index-menu-line" />
              <div className="uk-index-menu">
                {sectionsList.map((sec) => (
                  <button
                    key={sec.num}
                    className={`uk-index-item ${activeSection === sec.num ? 'active' : ''}`}
                    onClick={() => scrollToSection(sec.id, sec.num)}
                  >
                    <span className="uk-index-title">{sec.title}</span>
                    <span className="uk-index-num">{sec.num}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="uk-divider" />

        {/* ================= 01 PROJECT INTRO ================= */}
        <section id="section-01" className="uk-section uk-intro-section">
          <div className="uk-container">
            <div className="uk-section-tag">01 PROJECT INTRO</div>
            
            <h2 className="uk-hero-title">
              RETAIL <span className="highlight-maroon">DASHBOARD</span>
            </h2>
            
            <h3 className="uk-hero-subtitle">
              Retail inventory management dashboard
            </h3>

            <p className="uk-hero-desc">
              A centralized web dashboard designed for fashion retail teams to manage stock across 40 outlets, identify inventory bottlenecks, and make faster restocking decisions.
            </p>

            {/* Meta Grid */}
            <div className="uk-meta-grid">
              <div className="uk-meta-item">
                <span className="uk-meta-label">ROLE</span>
                <span className="uk-meta-val">UI/UX Designer</span>
              </div>
              <div className="uk-meta-item">
                <span className="uk-meta-label">PLATFORM</span>
                <span className="uk-meta-val">Web Dashboard</span>
              </div>
              <div className="uk-meta-item">
                <span className="uk-meta-label">TYPE</span>
                <span className="uk-meta-val">Academic UX/UI Project</span>
              </div>
            </div>

            {/* Top Hero Banner Image (Image 2 HD) */}
            <div className="uk-hero-banner-horizontal">
              <img
                src="/uk_assets/uk_hero_intro_top.png"
                alt="UrbanKart Retail Dashboard Login Screen"
                className="uk-hero-img-horizontal uk-hd-image"
              />
            </div>
          </div>
        </section>

        <div className="uk-divider" />

        {/* ================= 02 BRIEF & SCOPE ================= */}
        <section id="section-02" className="uk-section">
          <div className="uk-container">
            <div className="uk-section-tag">02 BRIEF & SCOPE</div>
            
            <div className="uk-editorial-grid uk-2col">
              <div className="uk-editorial-col">
                <h3 className="uk-col-heading">THE <span className="highlight-maroon">BRIEF</span></h3>
                <p className="uk-text">
                  Design a retail inventory dashboard for a fashion brand managing stock across <strong>40 outlets</strong>.
                </p>
                <p className="uk-text">
                  The dashboard needed to help retail teams monitor inventory, identify stock issues, and make faster decisions without having to work through scattered information.
                </p>
              </div>

              <div className="uk-editorial-col">
                <h3 className="uk-col-heading">SCOPE OF <span className="highlight-maroon">WORK</span></h3>
                <ul className="uk-scope-list">
                  <li>UX Research</li>
                  <li>Information Architecture</li>
                  <li>User Flows</li>
                  <li>Wireframing</li>
                  <li>Dashboard UI</li>
                  <li>Responsive Design</li>
                  <li>Prototyping</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="uk-divider" />

        {/* ================= 03 THE PROBLEM ================= */}
        <section id="section-03" className="uk-section">
          <div className="uk-container">
            <div className="uk-section-tag">03 THE PROBLEM</div>
            
            <h3 className="uk-col-heading">THE <span className="highlight-maroon">PROBLEM</span></h3>
            <div className="uk-text-block">
              <p className="uk-text">
                Managing inventory across multiple stores involves a large amount of information.
              </p>
              <p className="uk-text">
                Retail teams need to quickly understand <strong>what is in stock, what is running low, and where action is needed</strong>.
              </p>
              <p className="uk-text">
                The challenge was to turn this information into a dashboard that supports quick decision-making rather than overwhelming users with data.
              </p>
            </div>
          </div>
        </section>

        <div className="uk-divider" />

        {/* ================= 04 USERS & PERSONAS ================= */}
        <section id="section-04" className="uk-section">
          <div className="uk-container">
            <div className="uk-section-tag">04 USERS & PERSONAS</div>
            
            <h3 className="uk-col-heading">USERS & <span className="highlight-maroon">PERSONAS</span></h3>
            
            <div className="uk-personas-grid">
              
              {/* Primary Persona Card */}
              <div className="uk-persona-card uk-persona-primary">
                <span className="uk-persona-role-badge">PRIMARY USER</span>
                <h4 className="uk-persona-name font-kalnia">Sunaina Mehra · 37</h4>
                <span className="uk-persona-title">Inventory Manager</span>
                <p className="uk-text uk-mt-sm">
                  Responsible for monitoring inventory across multiple outlets and making sure stores have the right stock at the right time.
                </p>
              </div>

              {/* Secondary Users */}
              <div className="uk-personas-sub-grid">
                <div className="uk-persona-card">
                  <span className="uk-persona-role-badge">MARKETING</span>
                  <h4 className="uk-persona-title-sm">Marketing Manager</h4>
                  <p className="uk-text uk-mt-xs">
                    Monitors product performance and supports promotional decisions.
                  </p>
                </div>

                <div className="uk-persona-card">
                  <span className="uk-persona-role-badge">STORE OPERATIONS</span>
                  <h4 className="uk-persona-title-sm">Regional / Store Manager</h4>
                  <p className="uk-text uk-mt-xs">
                    Tracks store-level inventory and manages local stock requirements.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="uk-divider" />

        {/* ================= 05 DESIGN APPROACH ================= */}
        <section id="section-05" className="uk-section">
          <div className="uk-container">
            <div className="uk-section-tag">05 DESIGN APPROACH</div>
            
            <h3 className="uk-col-heading">DESIGN <span className="highlight-maroon">APPROACH</span></h3>
            <div className="uk-text-block uk-mb-xl">
              <p className="uk-text">
                The dashboard was structured around the decisions users need to make rather than simply displaying available data.
              </p>
            </div>

            <div className="uk-focus-grid">
              <div className="uk-focus-card">
                <span className="uk-focus-num">01</span>
                <h4 className="uk-focus-title">Clear hierarchy</h4>
                <p className="uk-focus-desc">Prioritise important inventory information and actions.</p>
              </div>

              <div className="uk-focus-card">
                <span className="uk-focus-num">02</span>
                <h4 className="uk-focus-title">Quick overview</h4>
                <p className="uk-focus-desc">Surface stock status and key metrics at a glance.</p>
              </div>

              <div className="uk-focus-card">
                <span className="uk-focus-num">03</span>
                <h4 className="uk-focus-title">Easy comparison</h4>
                <p className="uk-focus-desc">Make it easier to understand inventory across products and stores.</p>
              </div>

              <div className="uk-focus-card">
                <span className="uk-focus-num">04</span>
                <h4 className="uk-focus-title">Action-oriented flows</h4>
                <p className="uk-focus-desc">Reduce the steps needed to identify and respond to stock issues.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="uk-divider" />

        {/* ================= 06 INFORMATION ARCHITECTURE ================= */}
        <section id="section-06" className="uk-section">
          <div className="uk-container">
            <div className="uk-section-tag">06 INFORMATION ARCHITECTURE</div>
            
            <h3 className="uk-col-heading">INFORMATION <span className="highlight-maroon">ARCHITECTURE</span></h3>
            <p className="uk-text uk-mb-lg">
              Sitemap structure organized around retail decision nodes and operational navigation:
            </p>

            <div className="uk-ia-cards-grid">
              <div className="uk-ia-card">
                <span className="uk-ia-num">01</span>
                <h4 className="uk-ia-title">Dashboard</h4>
                <p className="uk-ia-desc">Overview of inventory and important metrics</p>
              </div>

              <div className="uk-ia-card">
                <span className="uk-ia-num">02</span>
                <h4 className="uk-ia-title">Inventory</h4>
                <p className="uk-ia-desc">Browse and manage products and stock</p>
              </div>

              <div className="uk-ia-card">
                <span className="uk-ia-num">03</span>
                <h4 className="uk-ia-title">Stores</h4>
                <p className="uk-ia-desc">View inventory across different outlets</p>
              </div>

              <div className="uk-ia-card">
                <span className="uk-ia-num">04</span>
                <h4 className="uk-ia-title">Products</h4>
                <p className="uk-ia-desc">Access product-level information</p>
              </div>

              <div className="uk-ia-card">
                <span className="uk-ia-num">05</span>
                <h4 className="uk-ia-title">Reports</h4>
                <p className="uk-ia-desc">Review inventory-related data</p>
              </div>
            </div>
          </div>
        </section>

        <div className="uk-divider" />

        {/* ================= 07 DESIGN FOCUS ================= */}
        <section id="section-07" className="uk-section">
          <div className="uk-container">
            <div className="uk-section-tag">07 DESIGN FOCUS</div>
            
            <h3 className="uk-col-heading">DESIGN <span className="highlight-maroon">FOCUS</span></h3>

            <div className="uk-editorial-grid uk-2col uk-mt-lg">
              
              <div className="uk-editorial-col">
                <h4 className="uk-focus-item-title">Inventory at a glance</h4>
                <p className="uk-text">
                  Important stock information is surfaced without requiring users to search through multiple screens.
                </p>
              </div>

              <div className="uk-editorial-col">
                <h4 className="uk-focus-item-title">Store-level visibility</h4>
                <p className="uk-text">
                  Users can understand how inventory is distributed across the retail network.
                </p>
              </div>

              <div className="uk-editorial-col">
                <h4 className="uk-focus-item-title">Product monitoring</h4>
                <p className="uk-text">
                  Product-level information helps managers identify stock that needs attention.
                </p>
              </div>

              <div className="uk-editorial-col">
                <h4 className="uk-focus-item-title">Reordering</h4>
                <p className="uk-text">
                  The interface supports faster decisions when products need to be restocked.
                </p>
              </div>

            </div>
          </div>
        </section>

        <div className="uk-divider" />

        {/* ================= 08 WIREFRAMES ================= */}
        <section id="section-08" className="uk-section">
          <div className="uk-container">
            <div className="uk-section-tag">08 WIREFRAMES</div>
            
            <h3 className="uk-col-heading"><span className="highlight-maroon">WIREFRAMES</span></h3>
            <h4 className="uk-headline-sub">Reordering Bootcut Jeans</h4>
            
            <p className="uk-text uk-mb-xl">
              A key interaction focused on identifying a <strong>bootcut jeans</strong> stock issue and deciding whether a reorder was required. The flow moves from identifying the stock status to reviewing the relevant product and taking action.
            </p>

            {/* Wireframes Grid */}
            <div className="uk-wireframes-grid">
              
              <div className="uk-wf-card">
                <div className="uk-wf-header">
                  <span className="uk-wf-badge">Product Master Table</span>
                  <span className="uk-wf-title">Inventory & Stock Status Wireframe</span>
                </div>
                <div className="uk-wf-img-wrapper">
                  <img
                    src="/uk_assets/uk_wf_product_master.png"
                    alt="UrbanKart Product Master Wireframe Table"
                    className="uk-wf-img uk-hd-image"
                  />
                </div>
                <p className="uk-wf-desc">
                  Data-dense product table displaying SKU codes, category tags, stock levels, and quick edit/action triggers.
                </p>
              </div>

              <div className="uk-wf-card">
                <div className="uk-wf-header">
                  <span className="uk-wf-badge">Authentication Flow</span>
                  <span className="uk-wf-title">Manager Login Wireframe</span>
                </div>
                <div className="uk-wf-img-wrapper">
                  <img
                    src="/uk_assets/uk_wf_login.png"
                    alt="UrbanKart Login Wireframe Screen"
                    className="uk-wf-img uk-hd-image"
                  />
                </div>
                <p className="uk-wf-desc">
                  Clean, minimal manager authentication interface supporting secure single-sign-on for store managers.
                </p>
              </div>

            </div>
          </div>
        </section>

        <div className="uk-divider" />

        {/* ================= 09 VISUAL DIRECTION ================= */}
        <section id="section-09" className="uk-section">
          <div className="uk-container">
            <div className="uk-section-tag">09 VISUAL DIRECTION</div>
            
            <h3 className="uk-col-heading">VISUAL <span className="highlight-maroon">DIRECTION</span></h3>
            
            <p className="uk-text uk-mb-lg">
              The interface uses a structured dashboard layout with a focus on clear data hierarchy, consistent spacing, scannable information, simple navigation, and functional visual elements. The visual system was designed to keep the dashboard information-dense <strong>without making it feel cluttered</strong>.
            </p>

            {/* Main UI Kit & Components Overview Card */}
            <div className="uk-ds-main-card">
              <div className="uk-ds-card-header">
                <span className="uk-ds-tag">UI KIT & COMPONENTS SYSTEM</span>
                <span className="uk-ds-sub">Comprehensive design system overview</span>
              </div>
              
              <div className="uk-ds-main-img-wrapper">
                <img
                  src="/uk_assets/uk_design_system.png"
                  alt="UrbanKart Components, Action buttons, Text boxes, Iconography"
                  className="uk-ds-main-img uk-hd-image"
                />
              </div>
            </div>

            {/* Zoom Callout Pop-Up Cards */}
            <div className="uk-zoom-callouts-grid">
              
              {/* Typography Specimen Zoom Pop-up Card */}
              <div className="uk-zoom-card">
                <div className="uk-zoom-card-header">
                  <span className="uk-zoom-pill">TYPOGRAPHY HIGHLIGHT</span>
                  <span className="uk-zoom-icon">🔍 Hover to Zoom</span>
                </div>
                <div className="uk-zoom-img-container">
                  <img
                    src="/uk_assets/uk_typography.png"
                    alt="Poppins Typography System Highlight"
                    className="uk-zoom-img uk-hd-image"
                  />
                </div>
                <div className="uk-zoom-note-box">
                  <span className="uk-note-title font-kalnia">Typography Note</span>
                  <p className="uk-note-text">
                    <strong>Poppins</strong> font hierarchy (24px heading, 17px body, 15px caption, 12px footer) balances legibility with visual personality across data-heavy dashboard tables.
                  </p>
                </div>
              </div>

              {/* Color Palette Specimen Zoom Pop-up Card */}
              <div className="uk-zoom-card">
                <div className="uk-zoom-card-header">
                  <span className="uk-zoom-pill">COLOR SYSTEM HIGHLIGHT</span>
                  <span className="uk-zoom-icon">🔍 Hover to Zoom</span>
                </div>
                <div className="uk-zoom-img-container">
                  <img
                    src="/uk_assets/uk_color_palette.png"
                    alt="Functional Status Color Palette Highlight"
                    className="uk-zoom-img uk-hd-image"
                  />
                </div>
                <div className="uk-zoom-note-box">
                  <span className="uk-note-title font-kalnia">Color System Note</span>
                  <p className="uk-note-text">
                    Functional status color palette (<strong>#0089BB</strong> Primary, <strong>#E74C3C</strong> Out of Stock, <strong>#2FA963</strong> In Stock, <strong>#F39C12</strong> Low Stock) with 30% opacity alert containers for fast visual scanning.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <div className="uk-divider" />

        {/* ================= 10 INTERACTIVE PROTOTYPE ================= */}
        <section id="section-10" className="uk-section">
          <div className="uk-container">
            <div className="uk-section-tag">10 INTERACTIVE PROTOTYPE</div>
            
            <div className="uk-proto-header">
              <div>
                <h3 className="uk-col-heading uk-mb-sm">INTERACTIVE <span className="highlight-maroon">PROTOTYPE</span></h3>
                <p className="uk-text">Experience the live retail dashboard workflow prototype below.</p>
              </div>

              <a 
                href={figmaProtoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="uk-proto-external-btn"
              >
                Open Fullscreen Prototype ↗
              </a>
            </div>

            <div className="uk-proto-wrapper">
              <iframe
                title="UrbanKart Interactive Dashboard Prototype"
                className="uk-proto-iframe"
                src={figmaEmbedUrl}
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <div className="uk-divider" />

        {/* ================= 11 THE EXPERIENCE ================= */}
        <section id="section-11" className="uk-section">
          <div className="uk-container">
            <div className="uk-section-tag">11 THE EXPERIENCE</div>
            
            <h3 className="uk-col-heading">THE <span className="highlight-maroon">EXPERIENCE</span></h3>
            <h4 className="uk-headline-sub">From scattered inventory data to one clear overview.</h4>
            
            <p className="uk-text uk-mb-xl">
              UrbanKart brings product, store, and stock information into a single workspace so retail teams can understand inventory and act on issues more efficiently.
            </p>

            {/* Experience Showcase Laptop Image (Image 1 HD) */}
            <div className="uk-experience-showcase">
              <img
                src="/uk_assets/uk_experience_laptop.png"
                alt="UrbanKart Retail Dashboard Laptop Experience"
                className="uk-showcase-img uk-hd-image"
              />
            </div>
          </div>
        </section>

        <div className="uk-divider" />

        {/* ================= 12 OUTCOME & REFLECTION ================= */}
        <section id="section-12" className="uk-section">
          <div className="uk-container">
            <div className="uk-section-tag">12 OUTCOME & REFLECTION</div>
            
            <div className="uk-editorial-grid uk-2col">
              <div className="uk-editorial-col">
                <h3 className="uk-col-heading">THE <span className="highlight-maroon">RESULT</span></h3>
                <p className="uk-text">
                  A retail inventory dashboard designed to make <strong>multi-store stock management easier to understand and act on</strong>.
                </p>
                <p className="uk-text">
                  The project helped me explore how UX decisions change when designing for <strong>data-heavy, task-oriented products</strong> rather than consumer-facing interfaces.
                </p>
              </div>

              <div className="uk-editorial-col">
                <h3 className="uk-col-heading">WHAT I <span className="highlight-maroon">LEARNED</span></h3>
                <p className="uk-text">
                  Designing UrbanKart made me think beyond individual screens and focus on <strong>how information supports decisions</strong>.
                </p>
                <p className="uk-text">
                  The biggest challenge was balancing the amount of data a retail manager needs with an interface that remains easy to scan and use.
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
