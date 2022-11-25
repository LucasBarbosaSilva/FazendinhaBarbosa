import Image from 'next/image';
import styles from './styles.module.css'

function IconPlantar () {
  return(
    <div className={styles.icon_plantar}>
      <Image
        src={"/plantas/plantar.png"}
        alt="icone plantar"
        fill
        style={{objectFit: 'contain'}}
      />
    </div>
  );
}

export {IconPlantar};