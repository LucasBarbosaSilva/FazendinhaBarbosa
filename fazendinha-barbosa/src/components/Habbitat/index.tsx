import Image from 'next/image';
import {AnimalHabbitatProps} from '../../modules/animalHabbitat';
import { ImageAnimal } from '../ImageAnimal';
import { ImageHabbitat } from '../ImageHabbitat';
import styles from './styles.module.css'

function Habbitat ({nome, animaisNoLocal, imagem, quantidadeAnimais, setModal}:AnimalHabbitatProps) {
  return(
    <>
      <div className={styles.container}>
        <ImageHabbitat imagem={imagem} />
        {
          animaisNoLocal.map((animal,index) => {
            return <ImageAnimal key={index} imagem={animal.obtemImagem()}/>
          })
        }
        <div className={styles.botao_plus}>
          <Image
            src={"/add.png"}
            alt="imagem habbitat"
            fill
            style={{objectFit: 'cover'}}
          />
        </div> 
        <button type='button' onClick={setModal}>
          <img src="/menu.png" alt="Fechar modal"/>
        </button>
      </div>
      
    </>
  );
}

export {Habbitat};