import styles from './Layout.module.css'; 
import { ChildrenProps } from '../../types/types';
import { Link } from 'react-router-dom';
import SearchBar from './search/SearchBar';

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className={styles.layout__container}>
        {/* Header */}
        <header className={styles.header__container}>
            {/* Marquee */}
            <div className={styles.header__marquee}>
                <span>Hola mundo — Bienvenido — JavaScript — React — TypeScript —</span>{/* Mostramos palabras al azar en movimiento */}
            </div>
            {/* Header Menu */}
            <div className={styles.header__menu__container}>
                {/* Logo */}
                <div className={styles.header__logo}>
                    <img src="./public/assets/Adidas_Logo.svg" alt="logo"/>
                </div>
                {/* Links */}
                <div className={styles.header__links}>
                    <Link to={{pathname: "/products", search: '?category=woman'}}>WOMAN</Link>
                    <Link to={{pathname: "/products", search: '?category=men'}}>MEN</Link>
                    <Link to={{pathname: "/products", search: '?category=shoes'}}>SHOES</Link> 
                </div>
                {/* SearchBar */}
                <div className={styles.header__search_login_and_cart}>
                    <SearchBar />
                    <p>Login</p>
                    <p>Cart</p>
                </div>
            </div>
        </header>
        {/* Content */}
        <main>
            {children}
        </main>
        {/* Footer */}
        <footer className={styles.footer__container}>
            <div className={styles.footer__components__container}>
                <div className={styles.footer__elements}>
                    <h2>Info</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Shipping Policy</li>
                    </ul>
                </div>
                <div className={styles.footer__elements}>
                    <h2>Collections</h2>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Shoes</li>
                        <li>Discounts</li>
                    </ul>
                </div>
                <div className={styles.footer__elements}>
                    <h2>Support</h2>
                    <ul>
                        <li>FAQ</li>
                        <li>Shipping & Returns</li>
                        <li>Order Tracking</li>
                        <li>Size Guide</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={styles.footer__elements}>
                    <h2>Follow Us</h2>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer__payment}>
                <p>Visa</p>
                <p>Mastercard</p>
                <p>American Express</p>
            </div>
        </footer>
    </div>
  )
}

export default Layout
