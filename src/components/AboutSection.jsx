import React, { useEffect, useRef } from 'react'
import './AboutSection.css'

const paragraphs = [
  'Data Prowess is a software development and consulting company dedicated to building resilient digital products. Our service suite spans Data Engineering, Data Analytics, product design, quality assurance, and digital transformation engagements.',
  'Data is our heritage and has always been at the core of everything we do. We help organisations unlock their advantage by operationalising data and analytics in ways that are practical, secure, and scalable.',
  'We remain vendor agnostic so we can recommend and orchestrate the right-fit solution for every client. Our proven accelerators and frameworks shorten delivery cycles, improve adoption, and deliver measurable business value.',
]

const highlights = [
  'End-to-end data & analytics expertise',
  'Cloud-native and hybrid architectures',
  'Modern engineering & automation practices',
]

const AboutSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        }),
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-grid">
          <div className="about-copy">
            <span className="section-eyebrow">About Us</span>
            <h2 className="about-heading">
              <strong>Data Prowess</strong> is a software development and consulting company
            </h2>
            <span className="divider-line" aria-hidden="true"></span>

            <div className="about-paragraphs">
              {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <ul className="about-highlight-list">
              {highlights.map((item) => (
                <li key={item}>
                  <span className="highlight-dot" aria-hidden="true"></span>
                  {item}
                </li>
              ))}
            </ul>

            {/* <a className="about-cta" href="#services">
              Learn More
            </a> */}
          </div>

          <div className="about-visual">
            <div className="image-frame">
              <img
                src="/images/about.jpg"
                alt="Data Prowess team collaborating"
                loading="lazy"
              />
              <div className="image-overlay" aria-hidden="true"></div>
              <div className="about-badge">
                <span className="badge-label">Data-first Mindset</span>
                <span className="badge-meta">From strategy to operations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
