import Image from 'next/image';
import styles from './styles.module.css'

function Habbitat () {
  return(
    <div className={styles.container}>
      <div className={styles.imagem_habbitat}>
        <Image
          src={"/animais/locais/galinheiro.jpg"}
          alt="imagem habbitat"
          fill
          style={{objectFit: 'cover'}}
        />
      </div>
      <div className={styles.imagem_animal}>
        <Image
          src={"/animais/bichos/galinha.png"}
          alt="imagem habbitat"
          fill
          style={{objectFit: 'cover'}}
        />
      </div>
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