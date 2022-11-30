import Image from 'next/image';
import styles from './styles.module.css'
interface ImageAnimalProps {
  imagem: string
}
function AnimalCard ({imagem}:ImageAnimalProps) {
  return(
    <div className={styles.imagem_animal}>
      <Image
        src={imagem}
        alt="imagem animal"
        fill
        style={{objectFit: 'contain', objectPosition: 'bottom'}}
      />
    </div>
  );
}

export {AnimalCard};