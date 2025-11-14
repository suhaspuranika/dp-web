import React from 'react'
import DataProwessSection from '../components/DataProwessSection'
import AboutSummary from '../components/AboutSummary'
import ServicesSummary from '../components/ServicesSummary'
import CTASection from '../components/CTASection'

const Home = () => (
  <>
    <DataProwessSection pattern="dots" />
    <AboutSummary />
    <ServicesSummary />
    <CTASection />
  </>
)

export default Home

