import { Link } from "react-router-dom"
import styles from "../styles/Error.module.scss"
import { useNavigate } from "react-router-dom"

function Error() {
  const navigate = useNavigate

  return (
    <>
      <div className={styles.error}>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className={styles.link}>Retourner sur la page d’accueil</Link>
      </div>
    </>
  )
}

export default Error