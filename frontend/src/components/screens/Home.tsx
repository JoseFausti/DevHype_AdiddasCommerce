import { Link } from 'react-router-dom'
import { products } from '../../data/Products'
import ProductCard from './ProductCard'
import Styles from './Home.module.css'
import { interestingItems } from '../../data/InterestingData'

const Home: React.FC = () => {
  return (
    <div className={Styles.home__container}>
      <div className={Styles.home__image__container}>
        <img src="/adidasRemera.png" alt="Banner Adidas Mall" className={Styles.imagen_responsive} />
      </div>
      <div className={Styles.home__content__container}>
        <div className={Styles.home__products_and_benefits}>
          <Link to="/shoes" className={Styles.shoes__title}>SHOES</Link>
          <div className={Styles.home__products}>
            {products.shoes.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                subtitle={product.subtitle}
              />
            ))}
            {products.shoes.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                subtitle={product.subtitle}
              />
            ))}
            {products.shoes.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                subtitle={product.subtitle}
              />
            ))}
            {products.shoes.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                subtitle={product.subtitle}
              />
            ))}
          </div>
          <div className={Styles.home__benefits}>
            <div className={Styles.home__benefit_image}>
              <img src="/modeloDescuentos.jpeg" alt="Modelo Descuentos" />
            </div>
            <div className={Styles.home__benefit_text}>
              <h2>OUTFITS FOR <br /><span>BENEFITS</span></h2>
              <p><span>60% OFF + free shipping:</span> onlu for Adidas clients.</p>
              <p>Check your account and start buying for benefits on <span>Adidas</span></p>
            </div>
          </div>
          <Link to="/discounts" className={Styles.discounts__title}>DISCOUNTS</Link>
          <div className={Styles.home__products}>
            {products.discounts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                subtitle={product.subtitle}
              />
            ))}
            {products.discounts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                subtitle={product.subtitle}
              />
            ))}
            {products.discounts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                subtitle={product.subtitle}
              />
            ))}
            {products.discounts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                subtitle={product.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={Styles.home__history_container}>
        <div className={Styles.home__history_image}>
          <img src="/modelo1.png" alt="Modelo History and Grace" />
        </div>
        <div className={Styles.home__history_title}>
          <h2>HISTORY AND GRACE</h2>
        </div>
        <div className={Styles.home__history_text}>
          <p>At adidas, we believe that sports have the 
            power to transform lives. It's not just about keeping your body and mind fit; it's about bringing people together and creating a community of individuals who share the same passion for excellence.</p>
          <p>Whether you're a runner, a basketball player, a soccer player, or someone who loves to train, you'll find a home with us. Our products are designed to meet your needs, no matter what your preferred form of exercise may be.</p>
          <p>We draw inspiration from the athletes who push themselves to their limits every day, and from the technology we develop to help them achieve their goals.</p>
          <p>We're not just present on the playing field, either. You'll find the three stripes at music festivals, on stages, and in the city streets.</p>
        </div>
        <div className={Styles.home__history_footer}>
          <h4>To improve performances. Improve lives <br />and change de world</h4>
        </div>
      </div>
      <div className={Styles.carrousel__container}>
        <h2 className={Styles.interesting__title}>MOST INTERESTING</h2>
        <div className={Styles.home__products}>
          {interestingItems.map((item) => (
            <Link to={item.link} key={item.id} className={Styles.interesting__image__wrapper}>
              <img src={item.image} alt={`Interesting ${item.id}`} className={Styles.interesting__image} />
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home
