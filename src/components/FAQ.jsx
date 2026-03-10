import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'Do I really get the cake as it looks in the photo?',
    a: 'The photos on our website are of real cakes. Besides the fact that they are professional photos, no extra effects have been added.'
  },
  {
    q: 'Are the cakes as delicious as they look?',
    a: 'We think our cakes are even more delicious than they look. Unfortunately, we cannot capture the flavors in a photo! We try to describe the exceptional flavors as best as possible on our website.'
  },
  {
    q: 'How far in advance can I place my order?',
    a: 'You can place your order as little as 1 day in advance, provided you order before 2:00 PM. Delivery excludes Sundays.'
  },
  {
    q: 'Is halal gelatin available?',
    a: 'Yes, it is possible to replace pork gelatin with beef leaf gelatin (halal) for some cakes — including Heart, Mondriaan, Honeycomb and Rose cake. Indicate your preference during the ordering process.'
  },
  {
    q: 'Do you offer bundle discounts?',
    a: 'Yes! Save €10 when you buy 2 cakes, €25 when you buy 3 cakes, and €45 when you buy 4 cakes. Discounts are automatically applied at checkout.'
  },
  {
    q: 'Can you make custom cakes?',
    a: 'Yes! If you have a specific cake design or special requirements, contact us via WhatsApp and we\'ll be happy to discuss the possibilities. Custom orders start from €300.'
  },
  {
    q: 'How should I store the cake?',
    a: 'After delivery, place the cake in the refrigerator for at least 2 hours to allow the temperature to stabilize before serving.'
  },
  {
    q: 'Do you offer vegan cakes?',
    a: 'We currently do not have vegan options, but we are investigating whether this will be possible in the future. Follow us on social media to stay informed!'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="faq">
      <div className="faq__inner">
        <div className="faq__header">
          <span className="section-label">Got Questions?</span>
          <h2 className="section-title light" style={{ marginTop: '0.8rem' }}>
            Frequently Asked<br />Questions
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="faq__list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq__item${open === i ? ' faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
