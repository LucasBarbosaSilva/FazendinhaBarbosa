import Image from 'next/image';
import styles from './styles.module.css'

function ImageAnimal () {
  return(
    <div className={styles.imagem_animal}>
      <Image
        src={"/animais/bichos/galinha.png"}
        alt="imagem habbitat"
        fill
        style={{objectFit: 'cover'}}
      />
    </div>
  );
}

export {ImageAnimal};