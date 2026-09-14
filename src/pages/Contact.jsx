import Header from '../components/Header'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="contact-page-wrapper">
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
