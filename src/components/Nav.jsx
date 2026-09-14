import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <header className="nav-container">
      <nav className="nav-bar">
        <NavLink to="/" className="nav-logo" aria-label="Home">
          <img src="/nav-anim.gif" alt="Swirling cards animation" className="nav-logo-gif" />
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
