import Image from 'next/image';
import styles from './styles.module.css'

function ImageHabbitat () {
  return(
    <div className={styles.imagem_habbitat}>
        <Image
          src={"/animais/locais/galinheiro.jpg"}
          alt="imagem habbitat"
          fill
          style={{objectFit: 'cover'}}
        />
      </div>
  );
}

export {ImageHabbitat};