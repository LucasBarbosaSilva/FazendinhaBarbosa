import Image from 'next/image';
import styles from './styles.module.css'
interface ImageHabbitatProps {
  imagem: string
}
function ImageHabbitat ({imagem}:ImageHabbitatProps) {
  return(
    <div className={styles.imagem_habbitat}>
        <Image
          src={imagem}
          alt="imagem habbitat"
          fill
          style={{objectFit: 'cover'}}
        />
      </div>
  );
}

export {ImageHabbitat};