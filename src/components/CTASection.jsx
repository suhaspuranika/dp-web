import React from 'react'
import { Link } from 'react-router-dom'
import './CTASection.css'

const CTASection = () => {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-container">
        <div className="cta-content">
          <h2 id="cta-heading">Data is an asset</h2>
          <p>
            Unlock more value from your data estate with modern platforms, governed processes, and intelligent
            experiences. Our specialists partner with your teams to deliver the right blend of strategy and execution.
          </p>
        </div>

        <Link className="cta-button" to="/contact">
          Get in touch
        </Link>
      </div>
    </section>
  )
}

export default CTASection