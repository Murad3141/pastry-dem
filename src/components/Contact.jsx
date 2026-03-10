import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__info">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title light" style={{ marginTop: '0.8rem' }}>
            We'd Love to<br />Hear From You
          </h2>
          <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
          <p className="contact__intro">
            Have a question, custom order request, or just want to say hello?
            Reach out via the form or through our channels below.
          </p>

          <div className="contact__channels">
            <a className="contact__channel" href="https://wa.me/31000000000" target="_blank" rel="noreferrer">
              <span className="contact__channel-icon">💬</span>
              <div>
                <div className="contact__channel-title">WhatsApp</div>
                <div className="contact__channel-sub">24/7 available — chat with us</div>
              </div>
            </a>
            <div className="contact__channel">
              <span className="contact__channel-icon">📍</span>
              <div>
                <div className="contact__channel-title">Location</div>
                <div className="contact__channel-sub">Moordrecht, Netherlands</div>
              </div>
            </div>
            <div className="contact__channel">
              <span className="contact__channel-icon">🚚</span>
              <div>
                <div className="contact__channel-title">Delivery</div>
                <div className="contact__channel-sub">Throughout the Netherlands</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Message Received!</h3>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name" name="name" type="text" required
                  placeholder="Your name"
                  value={form.name} onChange={handleChange}
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email" required
                  placeholder="your@email.com"
                  value={form.email} onChange={handleChange}
                />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows="5" required
                  placeholder="Tell us about your order or question…"
                  value={form.message} onChange={handleChange}
                />
              </div>
              <button type="submit" className="contact__submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
