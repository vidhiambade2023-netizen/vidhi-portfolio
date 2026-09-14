import './Philosophy.css'

export default function Philosophy() {
  const quoteLines = [
    '“Designing digital',
    'experiences that feel',
    'effortless, thoughtful,',
    'and human.”'
  ]

  const tags = [
    'RESEARCH-DRIVEN',
    'USER CENTERED',
    'USABILITY',
    'ITERATION'
  ]

  return (
    <section className="philosophy-section">
      <div className="philosophy-container">
        {/* Big Quote with line-by-line hover highlight animation matching reference */}
        <div className="philosophy-quote">
          {quoteLines.map((line, index) => (
            <div key={index} className="philosophy-line-wrapper">
              <span className="philosophy-line">{line}</span>
            </div>
          ))}
        </div>

        {/* Horizontal Divider Line */}
        <div className="philosophy-divider"></div>

        {/* 4 Animated Stroke Boxes */}
        <div className="philosophy-tags">
          {tags.map((tag, index) => (
            <div key={index} className="philosophy-tag-box">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
