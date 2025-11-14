import React from 'react'
import { Link } from 'react-router-dom'
import './ServicesSummary.css'

const highlightServices = [
  {
    title: 'Data Architecture & Design',
    image: '/images/architect.png',
    copy:
      'Build firm foundations with modern, scalable architectures that support analytics, intelligent operations, and speed to insight.',
  },
  {
    title: 'Data Engineering',
    image: '/images/dataengineering.png',
    copy:
      'Design resilient ingestion, transformation, and orchestration pipelines that balance agility, cost, and governance.',
  },
  {
    title: 'Advanced Analytics & AI',
image: '/images/advancedanalytics.png',
    copy:
      'Move from dashboards to decisions with data science, machine learning, and AI solutions tailored to your business outcomes.',
  },
]

const ServicesSummary = () => (
  <section className="services-summary">
    <div className="services-summary__container">
      <header className="services-summary__header">
        <h2 className="services-summary__eyebrow">Services</h2>
        <h3 className="services-summary__title">Data-led capabilities that meet you wherever you are</h3>
        <p className="services-summary__lead">
          We partner across the data lifecycle—from strategy and platform engineering to analytics, visualization, and
          quality assurance—so you can deliver value faster with confidence.
        </p>
      </header>

      <div className="services-summary__grid">
        {highlightServices.map((service) => (
          <article key={service.title} className="services-summary__card">
            <div className="services-summary__image">
              <img src={service.image} alt={service.title} loading="lazy" />
              <div className="services-summary__image-overlay" aria-hidden="true"></div>
            </div>
            <div className="services-summary__body">
              <h4>{service.title}</h4>
              <p>{service.copy}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="services-summary__cta">
        <Link to="/services" className="services-summary__button">
          View all services
        </Link>
      </div>
    </div>
  </section>
)

export default ServicesSummary

