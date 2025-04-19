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
            <div>
                <div>
                    <img src="" alt="logo" />
                    <Link to={{pathname: "/products", search: '?category=Woman'}}>Woman</Link>
                    <Link to={{pathname: "/products", search: '?category=Men'}}>Men</Link>
                    <Link to={{pathname: "/products", search: '?category=Shoes'}}>Shoes</Link> 
                </div>
                {/* SearchBar */}
                <div>
                    <SearchBar />
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
                <div className={styles.footer__info}>
                    <h2>Info</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Shipping Policy</li>
                    </ul>
                </div>
                <div className={styles.footer__collections}>
                    <h2>Collections</h2>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Shoes</li>
                        <li>Discounts</li>
                    </ul>
                </div>
                <div className={styles.footer__support}>
                    <h2>Support</h2>
                    <ul>
                        <li>FAQ</li>
                        <li>Shipping & Returns</li>
                        <li>Order Tracking</li>
                        <li>Size Guide</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={styles.footer__social}>
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
                <ul>
                    <li>Visa</li>
                    <li>Mastercard</li>
                    <li>American Express</li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Layout
