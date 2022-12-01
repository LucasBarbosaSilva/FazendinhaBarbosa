import Image from 'next/image';
import { IconPlantar } from '../IconPlantar';
import styles from './styles.module.css'

function NovaPlantacao () {
  return(
    <div className={styles.container}>
      <div className={styles.container_plantacao}>
        <IconPlantar/>
      </div>
    </div>
  );
}

export {NovaPlantacao};