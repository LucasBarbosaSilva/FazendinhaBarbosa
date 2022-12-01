import { ImagePlantacao } from '../ImagePlantacao';
import styles from './styles.module.css'
export interface PlantacaoComponente {
  imagem: string,
  setModal: () => void
}
function Plantacao ({setModal, imagem}:PlantacaoComponente) {
  return(
    <div className={styles.container}>
      <ImagePlantacao 
        imagem={imagem}  
      />
      <div className={styles.container_plantacao}/>
      <button type='button' onClick={setModal}>
        <img src="/menu.png" alt="Fechar modal"/>
      </button> 
    </div>
  );
}

export default Plantacao;