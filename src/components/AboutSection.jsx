import React, { useEffect, useRef } from 'react'
import './AboutSection.css'

const AboutSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const aboutText = `
Data Prowess is a software development and consulting company. We are dedicated to excellent software development and testing with a comprehensive service suite encompassing Data Engineering, Data Analytics (Descriptive and Prescriptive), design and development, quality assurance and other digital transformation enterprise solutions.

Data is our heritage and has always been at the core of everything we do at Data Prowess. Our mission is to enable customers to use their data and analytics to build competitive advantage.

Our proficiencies drive exemplary new standards while accelerating changing needs for our clients. Our expertise in data and analytics strengthens our ability to provide data-driven solutions for our Digital and Customer Engagement services, aided by our expertise in Cloud & Technology.

We are vendor agnostic, meaning we can provide independent advice on the best solution for your organisation.

Using our deep data experience, we have developed multiple best practices and frameworks that improve technology adoption and accelerate delivery.`

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Us</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text-content">
            <p className="about-text">{aboutText}</p>
          </div>

          <div className="about-image-wrapper">
            <img
              src="/images/about-us.png"
              alt="About Data Prowess"
              className="about-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
