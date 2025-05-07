import { Link } from 'react-router-dom'
import Styles from './Home.module.css'
import { useAppSelector } from '../../hooks/redux'
import ProductCard from '../ui/cart/ProductCard'
import { IProduct } from '../../types/types'
import { useCarrousel } from '../../hooks/useCarrousel'

const Home: React.FC = () => {

  const {cart} = useAppSelector((state => state.cart));

  // Shoes carrousel
  const shoes = cart.filter((product) => product.category === 'shoes');
  const {currentItems: shoesItems} = useCarrousel<IProduct>(shoes);

  // Discount products carrousel
  const productsWithDiscount = cart.filter((product) => product.category === 'discounts' && product.discount.length);

  // Interesting items carrousel
  const interestingProducts = cart.filter((product) => product.category === 'interesting')
  const {currentItems: interestingItems} = useCarrousel<IProduct>(interestingProducts, 5000, 4);

  return (
    <div className={Styles.home__container}>
      <div className={Styles.home__image__container}>
        <img src="/public/adidasRemera.png" alt="Banner Adidas Mall" className={Styles.imagen_responsive} />
      </div>
      <div className={Styles.home__content__container}>
        <div className={Styles.home__products_and_benefits}>
          <Link to={{pathname: "/products", search: '?category=shoes'}} className={Styles.shoes__title}>SHOES</Link>
          <div className={Styles.home__products}>
            <ProductCard carrousel={shoesItems} />
          </div>
          <div className={Styles.home__benefits}>
            <div className={Styles.home__benefit_image}>
              <img src="https://images.unsplash.com/photo-1547676180-088a1cfe2041?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Modelo Descuentos" />
            </div>
            <div className={Styles.home__benefit_text}>
              <h2 className={Styles.benefits__title}>
                OUTFITS FOR <br /><span>BENEFITS</span>
              </h2>
              <p className={Styles.benefits__text}><span>60% OFF + free shipping:</span> onlu for Adidas clients.</p>
              <p className={Styles.benefits__text}>Check your account and start buying for benefits on <span>Adidas</span></p>
            </div>
          </div>
          <div className={Styles.home__discounts}>
            <Link to={{pathname: "/products", search: '?category=discounts'}} className={Styles.discounts__title}>DISCOUNTS</Link>
            {productsWithDiscount.length > 0
              ? <ProductCard carrousel={productsWithDiscount}/>
              : <p>There are no discounts at the moment</p>
            }
          </div>
        </div>
      </div>
      <div className={Styles.home__history_container}>
        <div className={Styles.home__history_image}>
          <img src="/nigger.png" alt="Modelo History and Grace" />
        </div>
        <div className={Styles.home__history_title}>
          <h2 className={Styles.history__title}>
            HISTORY AND GRACE
          </h2>
        </div>
        <div className={Styles.home__history_text}>
          <p className={Styles.history__text}>At adidas, we believe that sports have the
            power to transform lives. It's not just about keeping your body and mind fit; it's about bringing people together and creating a community of individuals who share the same passion for excellence.</p>
          <p className={Styles.history__text}>Whether you're a runner, a basketball player, a soccer player, or someone who loves to train, you'll find a home with us. Our products are designed to meet your needs, no matter what your preferred form of exercise may be.</p>
          <p className={Styles.history__text}>We draw inspiration from the athletes who push themselves to their limits every day, and from the technology we develop to help them achieve their goals.</p>
          <p className={Styles.history__text}>We're not just present on the playing field, either. You'll find the three stripes at music festivals, on stages, and in the city streets.</p>
        </div>
        <div className={Styles.home__history_footer}>
          <h4 className={Styles.text_footer}>To improve performances. Improve lives <br />and change de world</h4>
        </div>
      </div>
      <div className={Styles.carrousel__container}>
        <h2 className={Styles.interesting__title}>MOST INTERESTING</h2>
        <div className={Styles.home__products}>
          {interestingItems.map((item) => (
            <Link to={{pathname: `/products`, search: `?category=interesting&id=${item.id}`}} key={item.id} className={Styles.interesting__image__wrapper}>
              <img src={item.image} alt={`Interesting ${item.id}`} className={Styles.interesting__image} />
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home