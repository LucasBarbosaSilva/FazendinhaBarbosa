import Image from 'next/image';
import { IconPlantar } from '../IconPlantar';
import { ImagePlantacao } from '../ImagePlantacao';
import styles from './styles.module.css'
export interface PlantacaoComponente {
  setModal: () => void
}
function Plantacao ({setModal}:PlantacaoComponente) {
  return(
    <div className={styles.container}>
      <ImagePlantacao 
        imagem='/plantas/alimentos/milho.jpg'  
      />
      <div className={styles.container_plantacao}>
        {/* <div className={styles.image}></div> */}
      </div>
      <button type='button' onClick={setModal}>
        <img src="/menu.png" alt="Fechar modal"/>
      </button> 
    </div>
  );
}

export default Plantacao;