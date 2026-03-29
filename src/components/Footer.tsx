import styles from "../styles/Footer.module.scss"
import LOGO2 from "../assets/LOGO2.png"

function Footer() {
    return (
        <>
            <footer>
                <div className={styles.container}>
                    <img src={LOGO2} alt="logo-kasa" />

                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;