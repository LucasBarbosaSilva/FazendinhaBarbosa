import Image from 'next/image';
import styles from './Header.module.css'

function Header () {
  return(
    <div className={styles.container}>
      <Image
        src="/minifazendinha-cover.jpg"
        alt="" 
        fill
        objectFit='cover'
        objectPosition='top'
      />
    </div>
  );
}

export {Header};