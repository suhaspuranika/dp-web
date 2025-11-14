import React, { useEffect, useRef, useState } from 'react'
import './ContactSection.css'

const initialForm = { name: '', phone: '', email: '', message: '' }

const validate = (values) => {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.phone.trim()) {
    errors.phone = 'Phone is required.'
  } else {
    const digits = values.phone.replace(/[^\d]/g, '')
    if (digits.length < 8 || digits.length > 15) errors.phone = 'Enter a valid phone number.'
  }
  if (!values.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email.'
  if (!values.message.trim()) errors.message = 'Please write a message.'
  return errors
}

const infoEntries = [
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Address',
    content: (
      <span>
        Level 35, Tower One, International Towers,<br />
        100 Barangaroo Avenue, Sydney, NSW 2000 Australia
      </span>
    ),
  },
  {
    icon: 'fas fa-phone',
    label: 'Phone',
    content: (
      <a href="tel:+61424479526" aria-label="Call Data Prowess Australia">
        +61 424 479 526
      </a>
    ),
  },
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    content: (
      <a href="mailto:info@dataprowess.com.au" aria-label="Email Data Prowess Australia">
        info@dataprowess.com.au
      </a>
    ),
  },
]

const ContactSection = () => {
  const sectionRef = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSuccessMsg('')
    setErrorMsg('')

    const validation = validate(form)
    setErrors(validation)
    if (Object.keys(validation).length) return

    setSubmitting(true)
    try {
      // TODO integrate backend once endpoint is ready
      await new Promise((resolve) => setTimeout(resolve, 800))
      setSuccessMsg('Thanks for contacting us. We will be in touch shortly.')
      setForm(initialForm)
    } catch (error) {
      console.error(error)
      setErrorMsg('Message not sent. Please try again or email info@dataprowess.com.au.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-overlay" aria-hidden="true"></div>

      <div className="contact-container">
        <header className="contact-header">
          <span className="section-eyebrow">Contact</span>
          <h2 className="contact-title">Let’s build your next data advantage together</h2>
          <p className="contact-lead">
            Tell us about your goals and we’ll help you define the approach, technology stack, and roadmap to make it real.
          </p>
        </header>

        <div className="contact-content">
          <div className="contact-layout">
            <aside className="contact-info">
              <div className="info-card">
                <h3>We’d love to hear from you</h3>
                <p>
                  Share a few details and our team will reach out within 1–2 business days. We can start with a workshop,
                  solution review, or simply explore what’s possible together.
                </p>
              </div>

              <ul className="info-list">
                {infoEntries.map(({ icon, label, content }) => (
                  <li key={label} className="info-item">
                    <span className={`info-icon ${icon}`} aria-hidden="true"></span>
                    <div>
                      <span className="info-label">{label}</span>
                      <div className="info-content">{content}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="contact-form" role="form" aria-labelledby="contactFormTitle">
              <h3 id="contactFormTitle" className="form-title">
                Send a message
              </h3>
              <p className="form-subtitle">Fields marked with * are required.</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Name*
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="contact-name-error" className="error-text">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone*
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="+61 424 479 526"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="contact-phone-error" className="error-text">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="contact-email-error" className="error-text">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    How can we help?*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your project, challenge, or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="contact-message-error" className="error-text">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn-submit" disabled={submitting}>
                  {submitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
                      Sending…
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane" aria-hidden="true"></i>
                      Send Message
                    </>
                  )}
                </button>

                {successMsg && (
                  <div className="success-banner" role="status">
                    {successMsg}
                  </div>
                )}
                {errorMsg && (
                  <div className="error-banner" role="alert">
                    {errorMsg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
