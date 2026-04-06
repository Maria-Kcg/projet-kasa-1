import CarouselLogement from "../components/CarouselLogement"
import logements from "../logements.json"
import styles from "../styles/Logement.module.scss"
import { useParams } from "react-router-dom"
import { Star, ChevronUp, ChevronDown } from "lucide-react"
import { useState } from "react"

function Logement() {
    const { id } = useParams()
    const logement = logements.find((logement) => logement.id === id)

    if (logement === undefined) {
        return <p>Aucun logement trouvé</p>
    }

    //coloration des étoiles de ratingg
    const rating = Number(logement.rating);
    const grayStars = Array(5).fill(<Star color="#E3E3E3" fill="#E3E3E3" />);
    const pinkStars = Array(5).fill(<Star color="#FF6060" fill="#FF6060" />);

    //ouverture/fermeture des collapse
    const [isDesc, setIsDesc] = useState(false);
    const [isEquip, setIsEquip] = useState(false);

    //pour ouvrir la description
    const openDesc = () => {
        setIsDesc(!isDesc)
    };

    //pour ouvrir les équipements
    const openEquip = () => {
        setIsEquip(!isEquip)
    };

    return (
        <>
            <div className={styles.logement}>
                <CarouselLogement images={logement.pictures} />

                <div>
                    <div className={styles.logement_header}>
                        <div className={styles.infos}>
                            <h2>{logement.title}</h2>
                            <p>{logement.location}</p>

                            <div className={styles.tags}>
                                {logement.tags.map((tag, index) => (
                                    <p key={index}>{tag}</p>
                                ))}
                            </div>
                        </div>

                        <div className={styles.info_right}>
                            <div className={styles.author}>
                                <p>{logement.host.name}</p>
                                <div className={styles.author_img}>
                                    <img src={logement.host.picture} alt="autthor's picture" />
                                </div>
                            </div>

                            {/*rating*/}
                            <div className={styles.logement_rats}>
                                <div className={styles.rats}>
                                    {pinkStars.slice(5 - rating).map((pinkStar, index) => (
                                        <span key={index} className={styles.stars}>{pinkStar}</span>
                                    ))}
                                    {grayStars.slice(rating).map((grayStar, index) => (
                                        <span key={index} className={styles.stars}>{grayStar}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.desc_equip}>

                        <div className={styles.desc}>
                            <div className={styles.header}>
                                <p>Description</p>
                                <div onClick={openDesc}>
                                    {isDesc ? <ChevronDown /> : <ChevronUp />}
                                </div>
                            </div>
                            {isDesc &&
                                <div className={styles.content}>
                                    <p>{logement.description}</p>
                                </div>}
                        </div>

                        <div className={styles.equip}>
                            <div className={styles.header}>
                                <p>Equipements</p>
                                <div onClick={openEquip}>
                                    {isEquip ? <ChevronDown /> : <ChevronUp />}
                                </div>
                            </div>
                            {isEquip &&
                                <ul className={styles.content}>
                                    {logement.equipments.map((equipement, index) => (
                                        <li key={index}>{equipement}</li>
                                    ))}
                                </ul>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logement;