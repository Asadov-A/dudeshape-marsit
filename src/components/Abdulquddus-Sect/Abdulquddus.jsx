import pamada from '../../assets/pamada.png'
import pamada2 from '../../assets/pamada2.png'
import './Abdulquddus.css'

function Abdulquddus() {

  return (
    <>
    <div className="bob">
      <div className="header-section">
        <div className="header-left">
        <h1>Our Porular Product</h1>

        <p className="header-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        </div>
        <div className="header-right">
        <p className="discover-link">Discover Our Products <i class="fa-solid fa-arrow-right"></i></p>
        </div>
      </div>

      <main className="products-main">
        <div className="card">
          <img className="card-image" src={pamada} alt="" />
          <div className="card-content">
        <h2>Cosmetic products</h2>
        <p className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        <div className="card-footer">

          <div>
          <button className='buy-button'>Buy Now</button>
          <button className='add-button'>Add To Cart</button>
          </div>
          <div>
          <h3 className="price">$120</h3>
          </div>
          </div>
        
         
          </div>
        </div>
        <div className="card">
        <img className="card-image" src={pamada2} alt="" />
        <div className="card-content">
        <h2>Cosmetic products</h2>
        <p className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        <div className="card-footer">

          <div>
          <button className='buy-button'>Buy Now</button>
          <button className='add-button'>Add To Cart</button>
          </div>
          <div>
          <h3 className="price">$120</h3>
          </div>
          </div>
        
         
          </div>
        </div>
      </main>

      <section className="stats-section">
        <div className="stat-item">
          <h2 className="stat-number">100%</h2>
          <p className="stat-label">Organic Products</p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">2M+</h2>
          <p className="stat-label">Yearly Sales</p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">1.9M+</h2>
          <p className="stat-label">Happy Customer</p>
        </div>
      </section>
    </div>
    </>
  )
}

export default Abdulquddus
