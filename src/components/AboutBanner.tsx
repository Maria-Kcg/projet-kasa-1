import styles from "../styles/AboutBanner.module.scss";
import Imagesource2 from "../assets/Imagesource2.png"

function AboutBanner() {
    return (
        <>
            <div className={styles.banner}
                style={{ backgroundImage: `url(${Imagesource2})` }}
            >
            </div>
        </>
    )
}

export default AboutBanner;
