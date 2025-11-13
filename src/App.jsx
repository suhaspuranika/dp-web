import React from 'react'
import Navbar from './components/Navbar'
import DataProwessSection from './components/DataProwessSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <DataProwessSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}

export default App
