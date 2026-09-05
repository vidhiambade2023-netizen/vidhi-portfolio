import Header from '../components/Header'

export default function About() {
  return (
    <div style={{ minHeight: '120vh', paddingTop: '6rem' }}>
      <Header />
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>About</h1>
        <p style={{ color: '#a1a1aa', marginTop: '1rem' }}>Background, experience, and skills.</p>
      </main>
    </div>
  )
}
