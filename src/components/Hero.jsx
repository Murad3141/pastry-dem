import './Hero.css'

export default function Hero() {
  const scrollToCakes = () => {
    document.querySelector('#cakes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Background gradient layers */}
      <div className="hero__bg" />
      <div className="hero__overlay" />

      {/* Decorative circles */}
      <div className="hero__circle hero__circle--1" />
      <div className="hero__circle hero__circle--2" />

      {/* Content */}
      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="section-label">Online Bakery · Netherlands</span>
          <div className="hero__eyebrow-line" />
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line1">Elevate Your</span>
          <span className="hero__title-line2">Celebrations</span>
        </h1>

        <p className="hero__subtitle">
          Futuristic high-end cakes crafted from pure, natural ingredients.
          Each creation is as unique in taste as it is in appearance.
        </p>

        <div className="hero__cta-group">
          <button className="hero__cta hero__cta--primary" onClick={scrollToCakes}>
            Discover Our Cakes
          </button>
          <a className="hero__cta hero__cta--ghost" href="#about">
            Our Story
          </a>
        </div>

        <div className="hero__badges">
          <div className="hero__badge">
            <span className="hero__badge-icon">🚚</span>
            <span>Next-day delivery</span>
          </div>
          <div className="hero__badge-sep" />
          <div className="hero__badge">
            <span className="hero__badge-icon">🌿</span>
            <span>Natural ingredients</span>
          </div>
          <div className="hero__badge-sep" />
          <div className="hero__badge">
            <span className="hero__badge-icon">⭐</span>
            <span>Order before 2PM</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" onClick={scrollToCakes}>
        <div className="hero__scroll-dot" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
