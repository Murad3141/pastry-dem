import './CartModal.css'

export default function CartModal({ isOpen, onClose, cart, total, onRemove, onUpdateQty }) {
  if (!isOpen) return null

  return (
    <>
      <div className="cart-backdrop" onClick={onClose} />
      <aside className="cart-modal">
        <div className="cart-modal__header">
          <h2 className="cart-modal__title">Your Cart</h2>
          <button className="cart-modal__close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-modal__body">
          {cart.length === 0 ? (
            <div className="cart-modal__empty">
              <span>🛒</span>
              <p>Your cart is empty</p>
            </div>
          ) : (
            <ul className="cart-modal__list">
              {cart.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.images[0]} alt={item.name} className="cart-item__img" />
                  <div className="cart-item__info">
                    <div className="cart-item__name">{item.name}</div>
                    <div className="cart-item__price">€{item.price.toFixed(2)}</div>
                    <div className="cart-item__qty">
                      <button onClick={() => onUpdateQty(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <button className="cart-item__remove" onClick={() => onRemove(item.id)}>×</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-modal__footer">
            <div className="cart-modal__total">
              <span>Total</span>
              <span className="cart-modal__total-price">€{total.toFixed(2)}</span>
            </div>
            <button className="cart-modal__checkout">
              Set Delivery & Checkout
            </button>
            <p className="cart-modal__note">Order before 2PM — next-day delivery</p>
          </div>
        )}
      </aside>
    </>
  )
}
