import styles from './Layout.module.css';
import { ChildrenProps } from '../../types/types';
import { Link } from 'react-router-dom';
import { User, ShoppingCart, Search } from 'lucide-react';

const Layout: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <div className={styles.layout__container}>
            {/* Header */}
            <header className={styles.header__container}>
                {/* Marquee */}
                <div className={styles.header__marquee}>
                    <img src="assets/Logotipo Adidas Gris.svg" alt="Logo" />
                </div>

                {/* Header Menu */}
                <div className={styles.header__menu__container}>
                    {/* Logo + Links */}
                    <div className={styles.header__left}>
                        <div className={styles.header__logo}>
                            <img src="assets/Logotipo Adidas.svg" alt="Logo Adidas" />
                        </div>
                        <div className={styles.header__links}>
                            <Link to={{ pathname: "/products", search: '?category=woman' }}>WOMAN</Link>
                            <Link to={{ pathname: "/products", search: '?category=men' }}>MEN</Link>
                            <Link to={{ pathname: "/products", search: '?category=shoes' }}>SHOES</Link>
                            <Link to={{pathname: "/products", search: '?category=discounts'}}><span className={styles.discount}>DISCOUNTS</span></Link>
                        </div>
                    </div>

                    {/* Search + Icons */}
                    <div className={styles.header__search_login_and_cart}>
                        <form className={styles.search__form}>
                            <input type="text" placeholder="Search..." />
                            <button type="submit"><Search size={20} color="#000" /></button>
                        </form>
                        <User size={24} color="#000" style={{ cursor: 'pointer' }} />
                        <ShoppingCart size={24} color="#000" style={{ cursor: 'pointer' }} />
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

export default Layout;
