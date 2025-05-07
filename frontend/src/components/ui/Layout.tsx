import styles from './Layout.module.css';
import { Link } from 'react-router-dom';
import { User, ShoppingCart, Search } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
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
                            <Link to={{ pathname: "/products", search: '?category=discounts' }}><span className={styles.discount}>DISCOUNTS</span></Link>
                        </div>
                    </div>

                    {/* Search + Icons */}
                    <div className={styles.header__search_login_and_cart}>
                        <form className={styles.search__form}>
                            <input type="text" placeholder="Search..." />
                            <button type="submit"><Search size={20} color="#000" /></button>
                        </form>
                        <Link to="/Login">
                            <User size={24} color="#000" style={{ cursor: 'pointer' }} />
                        </Link>
                        <Link to="/Shopcart">
                            <ShoppingCart size={24} color="#000" style={{ cursor: 'pointer' }} />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main>
                <Outlet />
            </main>

            <footer className={styles.footer__container}>

                {/* LOGO ADIDAS CENTRADO ARRIBA */}
                <div className={styles.adidasImage}>
                    <img
                        src="/assets/Logotipo Adidas Blanco.png"
                        alt="Adidas Logo"
                        className={styles.adidasLogo}
                    />
                </div>

                {/* BLOQUES DE TEXTO */}
                <div className={styles.footer__components__container}>
                    <div className={styles.footer__elements}>
                        <h2>INFO</h2>
                        <ul>
                            <li>Terms and Conditions</li>
                            <li>Cookies</li>
                            <li>Privacy Politics</li>
                        </ul>
                    </div>

                    <div className={styles.footer__elements}>
                        <h2>COLLECTIONS</h2>
                        <ul>
                            <li>Ultraboost</li>
                            <li>Confirmed</li>
                            <li>NMD</li>
                            <li>Originals</li>
                        </ul>
                    </div>

                    <div className={styles.footer__elements}>
                        <h2>SPORTS</h2>
                        <ul>
                            <li>Football</li>
                            <li>Basketball</li>
                            <li>Running</li>
                            <li>Training</li>
                        </ul>
                    </div>

                    <div className={styles.footer__elements}>
                        <h2>SUPPORT</h2>
                        <ul>
                            <li>Customer</li>
                            <li>F.A.Q.</li>
                            <li>Shipping</li>
                            <li>adiClub</li>
                        </ul>
                    </div>

                    <div className={styles.footer__elements}>
                        <h2>FOLLOW US</h2>
                        <div className={styles.socialIcons}>
                            <a href="https://facebook.com">
                                <img src="/assets/Facebook_Logo.png" alt="Facebook" />
                            </a>
                            <a href="https://instagram.com">
                                <img src="/assets/Instagram_Logo.png" alt="Instagram" />
                            </a>
                            <a href="https://twitter.com">
                                <img src="/assets/X_Logo.png" alt="X" />
                            </a>
                            <a href="https://youtube.com">
                                <img src="/assets/Youtube_Logo.png" alt="YouTube" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ICONOS DE PAGO */}
                <div className={styles.footer__logo_and_payment}>
                    <div className={styles.paymentIcons}>
                        <img src="/assets/American_Express_Logo.png" alt="American Express" />
                        <img src="/assets/Mastercard_Logo.png" alt="Mastercard" />
                        <img src="/assets/Visa_Logo.png" alt="Visa" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;



