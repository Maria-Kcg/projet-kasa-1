import logements from "../logements.json"
import styles from "../styles/Card.module.scss"
import { useNavigate } from "react-router-dom";

function Card() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.container_card}>
                {
                    logements.map((logement) => (
                        <div  onClick={() => { navigate(`/logement/${logement.id}`) }}  key={logement.id} className={styles.card}>
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