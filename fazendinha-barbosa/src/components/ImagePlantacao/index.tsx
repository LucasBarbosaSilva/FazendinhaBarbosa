import Image from 'next/image';
import styles from './styles.module.css'
interface ImageHabbitatProps {
  imagem: string
}
function ImagePlantacao ({imagem}:ImageHabbitatProps) {
  return(
    <div className={styles.imagem_plantacao}>
        <Image
          src={imagem}
          alt="imagem habbitat"
          fill
          style={{objectFit: 'cover'}}
        />
      </div>
  );
}

export {ImagePlantacao};