import './Footer.css'

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-the">THE</span>
            <span className="footer__logo-pastry">PASTRY</span>
          </div>
          <p className="footer__tagline">Elevate your celebrations</p>
          <p className="footer__location">Moordrecht, Netherlands</p>
        </div>

        {/* Nav */}
        <div className="footer__col">
          <h4 className="footer__col-title">Navigate</h4>
          {[['#hero','Home'],['#cakes','Cakes'],['#about','About Us'],['#contact','Contact'],['#faq','FAQ']].map(([href, label]) => (
            <button key={label} className="footer__link" onClick={() => scrollTo(href)}>{label}</button>
          ))}
        </div>

        {/* Info */}
        <div className="footer__col">
          <h4 className="footer__col-title">Ordering</h4>
          <p className="footer__text">Order before 2:00 PM</p>
          <p className="footer__text">Next-day delivery</p>
          <p className="footer__text">Excluding Sundays</p>
          <p className="footer__text" style={{ marginTop: '0.8rem' }}>Custom orders from €300</p>
        </div>

        {/* Bundle deals */}
        <div className="footer__col">
          <h4 className="footer__col-title">Bundle Savings</h4>
          <p className="footer__text">2 cakes → Save €10</p>
          <p className="footer__text">3 cakes → Save €25</p>
          <p className="footer__text">4 cakes → Save €45</p>
          <p className="footer__text" style={{ marginTop: '0.8rem', fontSize: '0.72rem', opacity: 0.5 }}>
            Discounts applied at checkout
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} The Pastry. All rights reserved.</span>
        <span className="footer__bottom-sep">·</span>
        <span>Moordrecht, Netherlands</span>
      </div>
    </footer>
  )
}
