import { ChevronDown, ChevronUp } from "lucide-react"
import styles from "../styles/Collapse.module.scss"

function Collapse() {
    const collapses = [
        {
            title: "Fiabilité",
            description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            title: "Respect",
            description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusio,n de notre plateforme."
        },
        {
            title: "Service",
            description: "La qualité du servicees au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        },
        {
            title: "Sécurité",
            description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet  à nos équipes  de vérifierque les standards sont bien respectés. Nous organiqons égalements des ateliers sur la sécurité domestique pour nos hôtes.f"
        }
    ]

    return (
        <>
            <div className={styles.collapses_container}>  
                {collapses.map((collapse) => (
                    <div key={collapse.title} className={styles.collapse}>
                        <div className={styles.collapse_header}>
                            <p>{collapse.title}</p>
                            <div>
                                <ChevronUp size={32} />
                                <ChevronDown size={32} />
                            </div>
                        </div>
                        <div className={styles.collapse_description}> 
                            <p>{collapse.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Collapse