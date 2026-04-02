import CarouselLogement from "../components/CarouselLogement"
import "../logements.json"
import styles from "../styles/CarouselLogement.module.scss"

function Logement() {
    return (
        <>
            <CarouselLogement />

            <div>
                <div>
                    <div>
                        <p>{Logement.title}</p>
                        <p>{Logement.location}</p>
                    </div>
                    <div className={styles.author}>
                        <p>{Logement.host.name}</p>
                        <p>{Logement.host.location}</p>
                    </div>
                </div>
                <div>
                    <div className={styles.tags}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Logement