import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navLinkClass = ({ isActive }) =>
    `nav-link${isActive ? ' nav-link--active' : ''}`

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/data-prowess-logo.png" alt="Data Prowess Logo" />
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/services" className={navLinkClass} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
            Contact
          </NavLink>
        </div>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
