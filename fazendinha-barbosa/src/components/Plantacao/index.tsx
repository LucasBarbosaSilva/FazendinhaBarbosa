import Image from 'next/image';
import { IconPlantar } from '../IconPlantar';
import { ImagePlantacao } from '../ImagePlantacao';
import styles from './styles.module.css'

function Plantacao () {
  return(
    <div className={styles.container}>
      <ImagePlantacao 
        imagem='/plantas/alimentos/milho.jpg'  
      />
      <div className={styles.container_plantacao}>
        {/* <div className={styles.image}></div> */}
      </div>
      
    </div>
  );
}

export default Plantacao;