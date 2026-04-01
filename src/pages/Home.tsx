import Banner from "../components/Banner";
import Card from "../components/Card";
import styles from "../styles/Home.module.scss"

function Home() {
  return (
    <>
      <div className={styles.home_container}>
        <Banner />
        <Card />
      </div>
    </>
  )
}

export default Home;