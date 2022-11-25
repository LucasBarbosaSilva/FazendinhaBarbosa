import { Habbitat } from '../components/Habbitat'
import { Header } from '../components/Header/Header'
import { Plantacao } from '../components/Plantacao'
import { Animal, AnimalProps } from '../modules/animal'
import {Galinha} from '../modules/galinha'
import { AnimalHabbitat } from '../modules/animalHabbitat'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const animal = new Galinha("Tia Cocó", "pura", "/animais/bichos/galinha.png",43, 2,  48.9,  true)
  const animal2 = new Galinha("Tia Cocó", "pura", "/animais/bichos/galinha.png",43, 2,  48.9,  true)
  const animal3 = new Galinha("Tia Cocó", "pura", "/animais/bichos/galinha.png",43, 2,  48.9,  true)
  const animaisNoLocal = [animal, animal2, animal3]
  const habbitat = new AnimalHabbitat("Galinheiro",1, animaisNoLocal, "/animais/locais/galinheiro.jpg" );
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.container_celeiro}>
        <div className={styles.container_animais}>
          <Habbitat 
            nome={habbitat.getNome()} 
            animaisNoLocal={habbitat.getAnimaisNoLocal()}
            imagem={habbitat.getImagem()}
            quantidadeAnimais={habbitat.getQuantidadeAnimais()}
          />
        </div>
        <div className={styles.container_plantas}>
          <Plantacao/>
        </div>
      </div>
    </div>
  )
}
