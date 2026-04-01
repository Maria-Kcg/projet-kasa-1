import logements from "../logements.json"
import styles from "../styles/Card.module.scss"

function Card ( ){
    return(
        <>
            <div className={styles.container_card}>
                {
                    logements.map((logement) => (
                        <div key={logement.id} className={styles.card}>
                            <img src={logement.cover} alt="" />
                            <p>{logement.title}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card;