import Image from 'next/image';
import styles from './Header.module.css'

function Header () {
  return(
    <div className={styles.container}>
      <Image
        src="/minifazendinha-cover.jpg"
        alt="" 
        fill
        style={{objectFit: 'cover', objectPosition: 'top'}}
      />
    </div>
  );
}

export {Header};