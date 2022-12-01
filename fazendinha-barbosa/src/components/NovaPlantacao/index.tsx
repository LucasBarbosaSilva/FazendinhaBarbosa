import Image from 'next/image';
import { IconPlantar } from '../IconPlantar';
import styles from './styles.module.css'
interface NovaPlantacao {
  addPlantacao: () => void
}
function NovaPlantacao ({addPlantacao}: NovaPlantacao) {
  return(
    <div className={styles.container}>
      <button type="button" onClick={addPlantacao}>
        <div className={styles.container_plantacao}>
          <IconPlantar/>
        </div>
      </button>
    </div>
  );
}

export {NovaPlantacao};