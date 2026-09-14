import { useEffect, useState } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [cursorMode, setCursorMode] = useState('default') // 'default' | 'hover' | 'view'
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const onMouseLeave = () => {
      setIsVisible(false)
    }

    const onMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseOver = (e) => {
      const target = e.target

      // Check if hovering a project card specifically in recent works
      const projectCard = target.closest('.project-card')
      if (projectCard) {
        setCursorMode('view')
        return
      }

      // Check if hovering general interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive') ||
        target.closest('.nav-item') ||
        target.closest('.philosophy-line') ||
        target.closest('.social-icon-btn') ||
        target.closest('.about-cta-btn') ||
        target.closest('.connect-touch-btn')
      ) {
        setCursorMode('hover')
      } else {
        setCursorMode('default')
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isVisible])

  return (
    <div
      className={`custom-cursor-circle cursor-mode-${cursorMode} ${isVisible ? 'visible' : ''}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      <span className="cursor-text-view">VIEW</span>
    </div>
  )
}
