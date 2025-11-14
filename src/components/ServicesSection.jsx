import React, { useEffect, useRef } from 'react'
import './ServicesSection.css'

const services = [
  {
    id: 1,
    title: 'Data Architecture and Design',
    image: '/images/architect.png',
    description: [
      'We help customers to build a firm foundation for business intelligence by leveraging our expertise across the data lifecycle with strong architecture, solution design and data strategy.',
      'Our expertise enables us to combine the best technologies and proven approach to deliver the most effective results and provide you with solutions that can help you collect relevant, understandable, and accurate data displayed in real time.',
      'We deliver on strategy, MVPs, PoCs and real-world ventures taking full advantage of big data and data lake paradigms.',
    ],
  },
  {
    id: 2,
    title: 'Data Engineering',
    image: '/images/dataengineering.png',
    description: [
      "We ensure that we will not take a one-size-fits-all approach. And we adhere to company's obligations to form a custom data integration consulting solution for data integration needs. Our data integration expertise encompasses combining data from different sources into a single, unified view, to ultimately obtain useful information on technical and business processes",
      'We tailor each experience and ensure that our clients are satisfied with the results. Bring together the data by integrating structured and unstructured data from online and offline systems and add new data feeds quickly and easily, during ingestion prioritise and process your data efficiently for immediate use and delivering value.',
    ],
  },
  {
    id: 3,
    title: 'Advanced Analytics / Machine Learning',
    image: '/images/advancedanalytics.png',
    description: [
      'We offer End to End Analytical solutions from Ideation to deployment including Discovery, Design, Development and Deployment. The base of any machine learning use-case is data. With the help of data engineers who also understand the business, we bring in data from disparate data sources and create a data-lake, which is one source of truth. This one source of truth then can be used for descriptive reporting with creative report authors who are well versed in presenting the data. At the same time, our data scientists try to understand the trend and develop state of art machine learning models, which can predict the future. This will give our clients a unique advantage over the competition.',
    ],
  },
  {
    id: 4,
    title: 'Data Visualisation & Reporting',
    image: '/images/datavisualisation.png',
    description: [
      'We aid customers brings data to life using Data visualization, making the master storyteller of the insights hidden within numbers. Through live dashboards, interactive reports, charts, graphs, and other visual representations, data visualization helps users develop powerful business insight quickly and effectively',
      "We demonstrate an understanding of the strategic value of information, data management, and Business Intelligence to organisational decision-making activities, analyse large corporate datasets using complementary Business Intelligence/Business Analytics tools to generate insights and provide alternative solutions to an organisation's complex problems",
    ],
  },
  {
    id: 5,
    title: 'Data Governance',
    image: '/images/datagovernance.png',
    description: [
      'Data governance is the best way to help your organization become data centric. We provide solutions to grow your business while ensuring internal and external policies are adhering compliance Easily, Invisibly and Frictionless.',
    ],
  },
  {
    id: 6,
    title: 'Master Data Management',
    image: '/images/masterdatamanagement.png',
    description: [
      'Our key focus is to ensure you are using the most up to date and reliable data across business units which is a single source of truth and can be shared and leveraged throughout the organisation.',
    ],
  },
  {
    id: 7,
    title: 'Cloud Computing Offering',
    image: '/images/cloud.png',
    description: [
      'We are experienced in a variety of cloud computing solutions, such as cloud migration strategy, cloud migration services and cloud-native design and development.',
      'As a consulting and technology solutions company, we also can provide integrated solutions that complement technical cloud work.',
      'We offer full range of support for Digital solutions on major cloud platform including AWS, Azure and GCP.',
    ],
  },
  {
    id: 8,
    title: 'Quality Assurance',
    image: '/images/qa.png',
    description: [
      "Quality Assurance is one of the key aspects of our solution offering. Data Prowess covers the full testing life cycle including Unit testing, System Integration testing, Regression and Performance automation testing. The company can set-up both manual and automated testing processes depending on a client's needs or independent product analysis.",
    ],
  },
  {
    id: 9,
    title: 'Industry Experience Domain',
    image: '/images/indexp.png',
    description: [
      'Our team has solid domain knowledge across multiple industries, including healthcare, Telecom, e-commerce, Constructions, Super Market, Finance and Insurance, Aviation and Education. We offer clients detailed reports, and valuable feedback with recommendations on quality improvement, helping to implement better business solutions.',
    ],
  },
]

const ServicesSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.service-item')
      items.forEach((item) => observer.observe(item))
    }

    return () => {
      if (sectionRef.current) {
        const items = sectionRef.current.querySelectorAll('.service-item')
        items.forEach((item) => observer.unobserve(item))
      }
    }
  }, [])

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        {services.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <div
              key={service.id}
              className={`service-item ${isEven ? 'service-item--left' : 'service-item--right'}`}
            >
              <div className="service-image-wrapper">
                <figure className="service-image-figure">
                  <img src={service.image} alt={service.title} className="service-image" loading="lazy" />
                </figure>
              </div>
              <div className="service-content">
                <h4 className="service-title">{service.title}</h4>
                <span className="service-divider"></span>
                <div className="service-description">
                  {service.description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesSection
