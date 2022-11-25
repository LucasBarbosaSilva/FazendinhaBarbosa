import Image from 'next/image';
import styles from './styles.module.css'

function Plantacao () {
  return(
    <div className={styles.container}>
      <div className={styles.container_plantacao}>
        <div className={styles.icon_plantar}>
          <Image
            src={"/plantas/plantar.png"}
            alt="icone plantar"
            fill
            style={{objectFit: 'contain'}}
          />
        </div>
      </div>
      
    </div>
  );
}

export {Plantacao};