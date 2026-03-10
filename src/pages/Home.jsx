import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import products from '../data/products'
import '../components/ProductCard.css'

export default function Home({ cartCount, onCartOpen, onAddToCart }) {
  return (
    <>
      <Header cartCount={cartCount} onCartOpen={onCartOpen} />
      <main>
        <Hero />

        {/* Cakes Section */}
        <section id="cakes" className="cakes-section">
          <div className="cakes-section__header">
            <span className="section-label">Our Collection</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
              Signature Cakes
            </h2>
          </div>

          {products.map((product, i) => (
            <div key={product.id}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
              {i < products.length - 1 && <hr className="product-card-divider" />}
            </div>
          ))}
        </section>

        <AboutUs />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
