import Image from 'next/image';
import { ImageAnimal } from '../ImageAnimal';
import { ImageHabbitat } from '../ImageHabbitat';
import styles from './styles.module.css'

function Habbitat () {
  return(
    <div className={styles.container}>
      <ImageHabbitat/>
      <ImageAnimal/>
      <div className={styles.botao_plus}>
        <Image
          src={"/add.png"}
          alt="imagem habbitat"
          fill
          style={{objectFit: 'cover'}}
        />
      </div>
    </div>
  );
}

export {Habbitat};