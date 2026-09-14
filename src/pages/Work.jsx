import Header from '../components/Header'
import WorkHero from '../components/WorkHero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Work() {
  return (
    <div className="work-page-wrapper">
      <Header />
      <main>
        <WorkHero />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
