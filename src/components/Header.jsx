import { Link } from 'react-router-dom'
import Nav from './Nav'
import { Button } from '@/components/ui/button'
import './Header.css'

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-content">
        {/* Left side: name [Vidhi] as a link to / */}
        <Link to="/" className="header-brand">
          Vidhi
        </Link>

        {/* Right side: Nav component & "Book a call" Button */}
        <div className="header-right">
          <Nav />
          <a href="mailto:vidhiambade1620@gmail.com" className="book-call-link">
            <Button className="book-call-btn">
              Book a call
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
