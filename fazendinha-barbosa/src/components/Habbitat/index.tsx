import Image from 'next/image';
import { Animal } from '../../modules/Animais/animal';
import { ImageAnimal } from '../ImageAnimal';
import { ImageHabbitat } from '../ImageHabbitat';
import styles from './styles.module.css'
interface AnimalHabbitatProps{
  nome: string;
  animaisNoLocal: Animal[];
  imagem: string;
  quantidadeAnimais: number;
  setModal: () => void;
  addAnimal: () => void;
}
function Habbitat ({nome, animaisNoLocal, imagem, quantidadeAnimais, setModal, addAnimal}:AnimalHabbitatProps) {
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
          <button type='button' onClick={addAnimal}>
            <Image
              src={"/add.png"}
              alt="imagem habbitat"
              fill
              style={{objectFit: 'cover'}}
            />
          </button>
        </div> 
        <button type='button' onClick={setModal}>
          <img src="/menu.png" alt="Fechar modal"/>
        </button>
      </div>
      
    </>
  );
}

export {Habbitat};