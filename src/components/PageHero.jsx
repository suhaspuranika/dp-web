import React from 'react'
import './PageHero.css'

const PageHero = ({ title, subtitle, background = '/images/hero_2.jpg' }) => (
  <section
    className="page-hero"
    style={{ backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(255, 248, 241, 0.5)), url(${background})` }}
  >
    <div className="page-hero__inner">
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  </section>
)

export default PageHero

