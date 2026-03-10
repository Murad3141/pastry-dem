import './AboutUs.css'

export default function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        {/* Left col */}
        <div className="about__text">
          <span className="section-label">Our Story</span>
          <h2 className="section-title light" style={{ marginTop: '0.8rem' }}>
            Where Art Meets<br />Flavour
          </h2>
          <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />

          <p className="about__para">
            At The Pastry, we take great pride in providing our customers with exceptional
            service and quality products. We are here to help you elevate your celebrations
            and events to the next level — surprise and impress your guests, friends,
            and all the people you love.
          </p>
          <p className="about__para">
            Ordinary cakes have lost the intended "Wow!" effect a long time ago.
            We want to help you bring that same excitement back to your special events.
            You are at a place where you can buy feelings — raised eyebrows,
            tantalized taste buds, and an energetic atmosphere.
          </p>
          <p className="about__para">
            Each cake is crafted from pure, natural ingredients, and we think their
            tastes are as unique as their appearance. We operate as an online bakery
            and offer delivery throughout the Netherlands.
          </p>

          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-num">6+</span>
              <span className="about__stat-label">Signature Cakes</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">100%</span>
              <span className="about__stat-label">Natural Ingredients</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">NL</span>
              <span className="about__stat-label">Nationwide Delivery</span>
            </div>
          </div>
        </div>

        {/* Right col — decorative */}
        <div className="about__visual">
          <div className="about__card about__card--1">
            <div className="about__card-icon">🍰</div>
            <div className="about__card-title">Futuristic Design</div>
            <p className="about__card-desc">
              No analogues currently on the market. Each cake is a sculpture you can taste.
            </p>
          </div>
          <div className="about__card about__card--2">
            <div className="about__card-icon">🌿</div>
            <div className="about__card-title">Pure & Natural</div>
            <p className="about__card-desc">
              Real cream, imported European chocolate, fresh fruits — nothing artificial.
            </p>
          </div>
          <div className="about__card about__card--3">
            <div className="about__card-icon">📦</div>
            <div className="about__card-title">Next-Day Delivery</div>
            <p className="about__card-desc">
              Order before 2:00 PM and receive your cake the following day. Excluding Sundays.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
