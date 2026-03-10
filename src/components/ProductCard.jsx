import { useState } from 'react'
import './ProductCard.css'

export default function ProductCard({ product, onAddToCart }) {
  const [activeImg, setActiveImg] = useState(0)
  const [detailOpen, setDetailOpen] = useState(false)
  const [qty, setQty] = useState(1)
  const [adding, setAdding] = useState(false)

  const handleAdd = () => {
    setAdding(true)
    for (let i = 0; i < qty; i++) {
      onAddToCart(product)
    }
    setTimeout(() => setAdding(false), 1200)
  }

  return (
    <article className="product-card" id={`product-${product.id}`}>
      {/* Image Gallery */}
      <div className="product-card__gallery">
        <div className="product-card__img-main">
          <img
            src={product.images[activeImg]}
            alt={product.name}
            loading="lazy"
          />
          <div className="product-card__tag">{product.tag}</div>
        </div>
        <div className="product-card__thumbs">
          {product.images.map((img, i) => (
            <button
              key={i}
              className={`product-card__thumb${activeImg === i ? ' active' : ''}`}
              onClick={() => setActiveImg(i)}
              aria-label={`View image ${i + 1}`}
            >
              <img src={img} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="product-card__info">
        <div className="section-label">{product.category}</div>
        <h2 className="product-card__name">{product.name}</h2>
        <div className="gold-divider" />
        <p className="product-card__desc">{product.shortDesc}</p>

        {/* Specs row */}
        <div className="product-card__specs">
          {product.specs.map(s => (
            <div key={s.label} className="product-card__spec">
              <span className="product-card__spec-label">{s.label}</span>
              <span className="product-card__spec-value">{s.value}</span>
            </div>
          ))}
        </div>

        {/* Allergens */}
        <div className="product-card__allergens">
          <span className="product-card__allergen-label">Allergens:</span>
          <span>{product.allergens}</span>
        </div>

        {/* More Info toggle */}
        <button
          className="product-card__more-btn"
          onClick={() => setDetailOpen(v => !v)}
        >
          {detailOpen ? '— Less info' : '+ More info'}
        </button>

        {detailOpen && (
          <div className="product-card__detail">
            <p className="product-card__ingredients-title">Ingredients:</p>
            <p className="product-card__ingredients">{product.ingredients}</p>
          </div>
        )}

        {/* Price + Add */}
        <div className="product-card__buy-row">
          <div className="product-card__price">€{product.price.toFixed(2)}</div>
          <div className="product-card__qty">
            <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
            <span>{qty}</span>
            <button onClick={() => setQty(q => q + 1)}>+</button>
          </div>
          <button
            className={`product-card__add-btn${adding ? ' product-card__add-btn--added' : ''}`}
            onClick={handleAdd}
          >
            {adding ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>

        <p className="product-card__delivery-note">
          🚚 Order before 2:00 PM — next day delivery!
        </p>
      </div>
    </article>
  )
}
