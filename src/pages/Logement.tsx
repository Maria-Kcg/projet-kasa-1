import CarouselLogement from "../components/CarouselLogement"
import logements from "../logements.json"
import styles from "../styles/Logement.module.scss"
import { useParams } from "react-router-dom"
import { Star, ChevronDown } from "lucide-react"
import { useState } from "react"
import Error from "./Error"

function Logement() {
    const { id } = useParams()
    const logement = logements.find((logement) => logement.id === id)

    if (!logement) {
        return <Error />
    }

    //coloration des étoiles de ratingg
    const rating = Number(logement.rating);
    const grayStars = Array(5).fill(<Star color="#E3E3E3" fill="#E3E3E3" />);
    const pinkStars = Array(5).fill(<Star color="#FF6060" fill="#FF6060" />);

    //ouverture/fermeture des collapses
    //const [isDesc, setIsDesc] = useState(false);
    //const [isEquip, setIsEquip] = useState(false);

    const [isOpen, setIsOpen] = useState<string[]>([]);

    const handleClick = (section : string) => {
        setIsOpen((prev) => {
            if (prev.includes(section)) {
                return prev.filter(item => item !== section)
            } else {
                return [...prev, section]
            }
        });
    }

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
                                <div onClick={() => handleClick("description")} className={styles.col_btn}>
                                    <ChevronDown className={`${styles.btn_down} ${isOpen.includes("description") ? styles.rotated : ""}`} />
                                </div>
                            </div>

                            <div className={`${styles.content} ${isOpen.includes("description") ? styles.open : ""}`}>
                                <p>{logement.description}</p>
                            </div>
                        </div>

                        <div className={styles.equip}>
                            <div className={styles.header}>
                                <p>Equipements</p>
                                <div onClick={() => handleClick("equipements")} className={styles.col_btn}>
                                    <ChevronDown className={`${styles.btn_down} ${isOpen.includes("equipements") ? styles.rotated : ""}`} />
                                </div>
                            </div>

                            <ul className={`${styles.content} ${isOpen.includes("equipements") ? styles.open : ""}`}>
                                {logement.equipments.map((equipement, index) => (
                                    <li key={index}>{equipement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logement;