import styles from "../styles/Header.module.scss"
import LOGO1 from "../assets/LOGO1.png"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <div className={styles.container}>
                    <img src={LOGO1} alt="logo-kasa" className={styles.header_logo} />

                    <nav className={styles.nav}>
                        <NavLink to="/" style={({ isActive }) => ({
                            textDecoration: isActive ? "underline" : "none",
                        })}
                            className={styles.nav_link}>Accueil</NavLink>
                        <NavLink to="/about" style={({ isActive }) => ({
                            textDecoration: isActive ? "underline" : "none",
                        })}
                            className={styles.nav_link}>A Propos</NavLink>
                    </nav>
                </div>
            </header >
        </>
    )
}

export default Header;