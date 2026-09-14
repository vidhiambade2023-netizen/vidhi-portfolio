import { useState } from 'react'
import './ContactSection.css'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send form submission to FormSubmit service notifying vidhi.uxd@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/vidhi.uxd@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: `${formData.firstName} ${formData.lastName}`,
          Email: formData.email,
          Message: formData.message,
          _subject: `New Portfolio Message from ${formData.firstName} ${formData.lastName}`
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
      } else {
        throw new Error('Submission failed')
      }
    } catch {
      // Fallback mailto trigger
      window.location.href = `mailto:vidhi.uxd@gmail.com?subject=Contact from ${encodeURIComponent(formData.firstName)}&body=${encodeURIComponent(formData.message)}`
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Giant Title "Contact me" with Liquid Maroon Glass Distortion Animation */}
        <h1 className="contact-giant-title">Contact me</h1>

        {/* 2-Column Content Layout */}
        <div className="contact-grid">
          
          {/* Left Column: Name, Designation & Clickable Email */}
          <div className="contact-left-info">
            <h2 className="contact-name">Vidhi Ambade</h2>
            <p className="contact-designation">UI/UX Designer & Student</p>
            
            <a href="mailto:vidhiambade.uxd@gmail.com" className="contact-email-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              vidhiambade.uxd@gmail.com
            </a>

            <div className="contact-social-links">
              <a
                href="https://www.linkedin.com/in/vidhiambade20"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-tag maroon-badge"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/vidhiambade"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-tag maroon-badge"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7V5h7v2zm-2.022 6.556c0-.996-.285-1.694-.855-2.094-.57-.4-1.397-.6-2.481-.6-1.127 0-2.008.261-2.643.783-.635.522-.98 1.325-1.035 2.409h6.985c.01-.166.029-.332.029-.498zm-7.004 2.148c.088 1.05.474 1.789 1.158 2.217.684.428 1.543.642 2.577.642.842 0 1.564-.153 2.166-.46.602-.307 1.042-.767 1.32-1.38h2.385c-.391 1.396-1.144 2.457-2.259 3.183-1.115.726-2.456 1.089-4.023 1.089-1.855 0-3.327-.514-4.416-1.542C10.993 18.425 10.45 16.92 10.45 14.938c0-1.924.537-3.415 1.611-4.473C13.135 9.407 14.582 8.878 16.4 8.878c1.785 0 3.2.493 4.245 1.479 1.045.986 1.567 2.378 1.567 4.176 0 .312-.02.624-.059.936H12.974v.285zM8.33 11.233c0-.664-.205-1.143-.615-1.437-.41-.294-.972-.441-1.686-.441H3.64v3.708h2.393c.772 0 1.353-.16 1.743-.48.39-.32.585-.769.585-1.35remzm.469 5.86c0-.752-.225-1.309-.675-1.671-.45-.362-1.094-.543-1.932-.543H3.64v4.544h2.553c.879 0 1.544-.176 1.995-.528.451-.352.677-.919.677-1.802zM.64 6h5.811c1.514 0 2.68.322 3.498.966.818.644 1.227 1.533 1.227 2.667 0 .801-.225 1.48-.675 2.037-.45.557-1.074.938-1.872 1.143 1.016.205 1.792.65 2.328 1.335.536.685.804 1.554.804 2.607 0 1.328-.444 2.368-1.332 3.12-.888.752-2.153 1.128-3.795 1.128H.64V6z"/>
                </svg>
                Behance
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-right-form">
            {isSubmitted ? (
              <div className="form-success-box">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out, Vidhi will get back to you shortly at <strong>vidhiambade.uxd@gmail.com</strong>.</p>
                <button
                  className="send-another-btn"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                
                {/* Name Row */}
                <div className="form-group-row">
                  <div className="form-field">
                    <label htmlFor="firstName">Name <span className="required-star">*</span></label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="First Name"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="lastName">&nbsp;</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="form-field">
                  <label htmlFor="email">Email <span className="required-star">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div className="form-field">
                  <label htmlFor="message">Message <span className="required-star">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Have a project, opportunity, or just want to talk design?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
