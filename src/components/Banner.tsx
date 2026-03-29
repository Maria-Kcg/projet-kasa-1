import Imagesource1 from "../assets/Imagesource1.png"
import styles from "../styles/Banner.module.scss";

function Banner() {
    return (
        <>
            <div className={styles.banner}
                style={{ backgroundImage: `url(${Imagesource1})` }}
            >
                <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
            </div>
        </>
    )
}

export default Banner;
