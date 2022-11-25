import { Habbitat } from '../components/Habbitat'
import { Header } from '../components/Header/Header'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.container_celeiro}>
        <div className={styles.container_animais}>
          <Habbitat/>
        </div>
        <div className={styles.container_plantas}>
          
        </div>
      </div>
    </div>
  )
}
