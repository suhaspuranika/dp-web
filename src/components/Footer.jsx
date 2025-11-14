import React from 'react'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const socials = [
    { name: 'Twitter', Icon: FaTwitter, href: '#' },
    { name: 'Facebook', Icon: FaFacebookF, href: '#' },
    { name: 'LinkedIn', Icon: FaLinkedinIn, href: '#' },
    { name: 'Instagram', Icon: FaInstagram, href: '#' },
  ]

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Data Prowess Pvt. Ltd. All Rights Reserved.</p>

        <ul className="footer-social">
          {socials.map(({ name, Icon, href }) => (
            <li key={name}>
              <a href={href} aria-label={name}>
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
