import React from 'react'
import PageHero from '../components/PageHero'
import AboutSection from '../components/AboutSection'
import CTASection from '../components/CTASection'

const About = () => (
  <>
    <PageHero
      title="About Us"
      subtitle="Data-first technologists partnering with organisations to deliver measurable outcomes through modern engineering and analytics."
      background="/images/hero_2.jpg"
    />
    <AboutSection />
    <CTASection />
  </>
)

export default About

