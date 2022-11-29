import styles from "./styles.module.css";
export function GerenciarAnimaisModal(){
  
  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h1>Selecione o animal e escolha o que deseja fazer</h1>
        {/* <button type='button'>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button> */}
      </div>
    </div>
  );
}