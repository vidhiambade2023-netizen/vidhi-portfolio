import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import AboutSection from '../components/AboutSection'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import './Home.css'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="home-page-wrapper">
      {/* Animated Light Wave Background spanning across the whole Home page */}
      <div
        className="home-bg-animated"
        style={{
          transform: `translate3d(0, ${scrollY * 0.22}px, 0) scale(${1 + scrollY * 0.0002})`
        }}
      />
      <div className="home-bg-overlay" />

      {/* Page Sections */}
      <div className="home-content">
        <Header />
        <Hero />
        <Philosophy />
        <AboutSection />
        <Projects showHeader={true} />
        <Footer />
      </div>
    </div>
  )
}
