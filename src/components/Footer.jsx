import { Button } from '@/components/ui/button'
import './Footer.css'

export default function Footer() {
  const socials = [
    {
      name: 'Email',
      url: 'mailto:vidhiambade.uxd@gmail.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vidhiambade20',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/vidhiambade',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-7V5h7v2zm-2.022 6.556c0-.996-.285-1.694-.855-2.094-.57-.4-1.397-.6-2.481-.6-1.127 0-2.008.261-2.643.783-.635.522-.98 1.325-1.035 2.409h6.985c.01-.166.029-.332.029-.498zm-7.004 2.148c.088 1.05.474 1.789 1.158 2.217.684.428 1.543.642 2.577.642.842 0 1.564-.153 2.166-.46.602-.307 1.042-.767 1.32-1.38h2.385c-.391 1.396-1.144 2.457-2.259 3.183-1.115.726-2.456 1.089-4.023 1.089-1.855 0-3.327-.514-4.416-1.542C10.993 18.425 10.45 16.92 10.45 14.938c0-1.924.537-3.415 1.611-4.473C13.135 9.407 14.582 8.878 16.4 8.878c1.785 0 3.2.493 4.245 1.479 1.045.986 1.567 2.378 1.567 4.176 0 .312-.02.624-.059.936H12.974v.285zM8.33 11.233c0-.664-.205-1.143-.615-1.437-.41-.294-.972-.441-1.686-.441H3.64v3.708h2.393c.772 0 1.353-.16 1.743-.48.39-.32.585-.769.585-1.35remzm.469 5.86c0-.752-.225-1.309-.675-1.671-.45-.362-1.094-.543-1.932-.543H3.64v4.544h2.553c.879 0 1.544-.176 1.995-.528.451-.352.677-.919.677-1.802zM.64 6h5.811c1.514 0 2.68.322 3.498.966.818.644 1.227 1.533 1.227 2.667 0 .801-.225 1.48-.675 2.037-.45.557-1.074.938-1.872 1.143 1.016.205 1.792.65 2.328 1.335.536.685.804 1.554.804 2.607 0 1.328-.444 2.368-1.332 3.12-.888.752-2.153 1.128-3.795 1.128H.64V6z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    }
  ]

  return (
    <footer className="connect-footer-section">
      <div className="connect-container">
        {/* Availability Status Tag */}
        <div className="connect-status-tag">
          <span className="status-dot"></span>
          OPEN TO OPPORTUNITIES
        </div>

        {/* Heading */}
        <h2 className="connect-heading">
          Let’s <span className="serif-italic">Connect</span>
        </h2>

        {/* Description */}
        <p className="connect-description">
          Have a project, opportunity, or just want to talk design?<br />
          I’d love to hear from you.
        </p>

        {/* Get in touch Neumorphic Button */}
        <a href="mailto:vidhiambade.uxd@gmail.com" className="connect-cta-link">
          <div className="connect-btn-wrapper">
            <Button className="connect-touch-btn">
              Get in touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Button>
          </div>
        </a>
      </div>

      {/* Bottom Footer Bar */}
      <div className="connect-bottom-bar">
        <div className="bottom-left-copyright">
          © Vidhi, 2026
        </div>

        <div className="bottom-right-socials">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label={social.name}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
