import Image from 'next/image';
import styles from './styles.module.css'
interface ImageAnimalProps {
  imagem: string
}
function OptionGerenciar ({imagem}:ImageAnimalProps) {
  return(
    <div className={styles.imagem_opcao}>
      <Image
        src={imagem}
        alt="imagem opção"
        fill
        style={{objectFit: 'contain'}}
      />
    </div>
  );
}

export {OptionGerenciar};