import React from 'react'
import { Link } from 'react-router-dom'
import './AboutSummary.css'

const AboutSummary = () => (
  <section className="about-summary">
    <div className="about-summary__container">
      <div className="about-summary__copy">
        <h2 className="about-summary__eyebrow">About Us</h2>
        <h3 className="about-summary__heading">
          <strong>Data Prowess</strong> is a software development and consulting company
        </h3>
        <p>
          We are dedicated to excellent software development and testing with a comprehensive service suite encompassing
          <span className="about-summary__highlight">
            {' '}
            Data Engineering, Data Analytics, design & development, quality assurance{' '}
          </span>
          and other digital transformation enterprise solutions.
        </p>
        <p>
          Our core strength is data and analytics. We help clients adopt modern practices, accelerate delivery, and turn
          information into competitive advantage.
        </p>

        <Link className="about-summary__cta" to="/about">
          Learn More
        </Link>
      </div>

      <div className="about-summary__visual">
        <div className="about-summary__frame">
          <img src="/images/about.jpg" alt="Data Prowess team collaborating" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
)

export default AboutSummary

