import Header from '../components/Header'
import AboutHero from '../components/AboutHero'
import AboutDetailsSection from '../components/AboutDetailsSection'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="about-page-wrapper">
      <Header />
      <main>
        <AboutHero />
        <AboutDetailsSection />
      </main>
      <Footer />
    </div>
  )
}
