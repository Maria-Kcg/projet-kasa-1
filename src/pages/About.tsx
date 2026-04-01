import styles from "../styles/About.module.scss"
import AboutBanner from "../components/AboutBanner";
import Collapse from "../components/Collapse";

function About() {
  return (
    <>
      <div className={styles.about_container}>
        <AboutBanner />
        <Collapse />
      </div>
    </>
  )
}

export default About;