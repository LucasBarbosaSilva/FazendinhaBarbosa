import Image from 'next/image';
import styles from './styles.module.css'
interface ImageAnimalProps {
  imagem: string
}
function ImageAnimal ({imagem}:ImageAnimalProps) {
  return(
    <div className={styles.imagem_animal}>
      <Image
        src={imagem}
        alt="imagem animal"
        fill
        style={{objectFit: 'cover'}}
      />
    </div>
  );
}

export {ImageAnimal};