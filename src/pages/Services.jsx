import React from 'react'
import PageHero from '../components/PageHero'
import ServicesSection from '../components/ServicesSection'
import CTASection from '../components/CTASection'

const Services = () => (
  <>
    <PageHero
      title="Our Services"
      subtitle="Strategy, engineering, analytics, and assurance services configured to unlock the real value of your data."
      background="/images/hero_2.jpg"
    />
    <ServicesSection />
    <CTASection />
  </>
)

export default Services

