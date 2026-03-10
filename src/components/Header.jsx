import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Cakes', href: '#cakes' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        {/* Logo */}
        <a className="header__logo" href="#hero" onClick={e => handleNav(e, '#hero')}>
          <span className="header__logo-the">THE</span>
          <span className="header__logo-pastry">PASTRY</span>
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="header__nav-link" onClick={e => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Cart + Menu */}
        <div className="header__actions">
          <button className="header__cart" onClick={onCartOpen} aria-label="Open cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && <span className="header__cart-badge">{cartCount}</span>}
          </button>
          <button
            className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`header__mobile-nav${menuOpen ? ' header__mobile-nav--open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.label} href={l.href} className="header__mobile-link" onClick={e => handleNav(e, l.href)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
