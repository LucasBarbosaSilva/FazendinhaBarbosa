import { useState } from "react";

import { AdubarStrategy } from "../../modules/Ger_Plantas/adubarStrategy";
import { CombaterPragasStrategy } from "../../modules/Ger_Plantas/combaterPragasStrategy";
import { IrrigarStrategy } from "../../modules/Ger_Plantas/irrigarStrategy";
import { StrategyPlantas } from "../../modules/Ger_Plantas/strategyPlantas";
import { Plantacao } from "../../modules/Plantas/plantacao";
import { Mensagem } from "../Mensagem";
import { OptionGerenciar } from "../OptionGerenciar";
import PlantacaoComponente from '../../components/Plantacao';
import styles from "./styles.module.css";
interface GerenciarPlantasModalProps {
  setModal: () => void,
  plantacao?: Plantacao
}
export function GerenciarPlantasModal({setModal, plantacao}:GerenciarPlantasModalProps){
  const [mensagem, setMensagem] = useState("")
  const [isMensagemVisible, setIsMensagemVisible] = useState(false);

  const cuidarPlantacao = [
    new AdubarStrategy("/plantas/gerenciar/adubar.png"),
    new CombaterPragasStrategy("/plantas/gerenciar/inseticida.png"),
    new IrrigarStrategy("/plantas/gerenciar/irrigar.png")
  ]

  function handleStrategy(strategy: StrategyPlantas){
    let texto = plantacao?.cuidarPlantas(strategy);
    setMensagem(texto);
    setIsMensagemVisible(true);
    setTimeout(() => setIsMensagemVisible(false), 2000);
  }

  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
          <div className={styles.container_button}>
            <button type='button' onClick={setModal}>
              <img src="/close.png" alt="Fechar modal"/>
            </button>
          </div>
        <h1>Escolha o que deseja fazer</h1>
        <div className={styles.container_list_animal}>
          {
            <PlantacaoComponente/>
          }
        </div>
        <div className={styles.container_mensagem}>
          { isMensagemVisible &&  
            <Mensagem
              mensagem={mensagem}
            />  
          }
        </div>
        
        <div className={styles.container_footer}>
          {
            cuidarPlantacao.map((strategy, index) => {
              return (
                  <button key={index} onClick={() => handleStrategy(strategy)}>
                    <OptionGerenciar
                      imagem={strategy.getImagem()}
                    />
                  </button>
                );
            })
          }
        </div>
        
      </div>
    </div>
  );
}