import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import styles from "../styles/CarouselLogement.module.scss"

function CarouselLogement({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);

    return (
        <>
            <div className={styles.slider}>
                <div className={styles.slider_show}>
                    <button onClick={() => { setIndex(index - 1) }} disabled={index === 0} className={styles.btn_left}>
                        <ChevronLeft size={96} />
                    </button>
                    <img src={images[index]} alt={images[index]} />
                    <button onClick={() => { setIndex(index + 1) }} disabled={index === images.length - 1} className={styles.btn_right}>
                        <ChevronRight size={96} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default CarouselLogement