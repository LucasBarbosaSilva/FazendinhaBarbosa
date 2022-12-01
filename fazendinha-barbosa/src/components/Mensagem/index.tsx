import styles from './styles.module.css'
interface MensagemProps {
  mensagem: string
}
function Mensagem ({mensagem}:MensagemProps) {
  return(
    <div className={styles.container_mensagem}>
      <p>
        {mensagem}
      </p>
    </div>
  );
}

export {Mensagem};