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
    if (digits.length < 10 || digits.length > 15) errors.phone = 'Enter a valid phone number.'
  }
  if (!values.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email.'
  if (!values.message.trim()) errors.message = 'Please write a message.'
  return errors
}

const ContactSection = () => {
  const sectionRef = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current) }
  }, [])

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccessMsg('')
    setErrorMsg('')
    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length) return

    setSubmitting(true)
    try {
      // Replace with your backend call
      await new Promise((r) => setTimeout(r, 800))
      setSuccessMsg('Thanks! Your message has been sent. We’ll get back to you soon.')
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      setErrorMsg('Something went wrong. You can also email us at info@data-prowess.com or call +91 63664 62576.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-content">
          <div className="contact-layout">
            {/* Minimal info rows */}
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>
                    711, 2nd Floor, Modi Hospital Rd, West of Chord Road, 2nd Stage,
                    Rajaji Nagar, Bengaluru, Karnataka - 560086
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p><a href="tel:+916366462576" aria-label="Call Data Prowess">+91 63664 62576</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p><a href="mailto:info@data-prowess.com" aria-label="Email Data Prowess">info@data-prowess.com</a></p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form" role="form" aria-labelledby="contactFormTitle">
              <h3 id="contactFormTitle" className="form-title">Send us a message</h3>
              <p className="form-subtitle">We usually respond within 1–2 business days.</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={onChange}
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <span id="name-error" className="error-text">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={onChange}
                      required
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && <span id="phone-error" className="error-text">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={onChange}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <span id="email-error" className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Write Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={onChange}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <span id="message-error" className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-submit" disabled={submitting}>
                  {submitting ? (<><i className="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending…</>) : (<><i className="fas fa-paper-plane" aria-hidden="true"></i> Send Message</>)}
                </button>

                {successMsg && <div className="success-banner" role="status">{successMsg}</div>}
                {errorMsg && <div className="error-banner" role="alert">{errorMsg}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
