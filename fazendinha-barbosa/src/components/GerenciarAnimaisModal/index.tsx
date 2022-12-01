import { useState } from "react";
import { Animal } from "../../modules/Animais/animal";
import { AnimalHabbitat } from "../../modules/animalHabbitat";
import { AlimentarStrategy } from "../../modules/Ger_Animais/alimentarStrategy";
import { DarCarinhoStrategy } from "../../modules/Ger_Animais/darCarinhoStrategy";
import { LimparStrategy } from "../../modules/Ger_Animais/limparStrategy";
import { StrategyAnimais } from "../../modules/Ger_Animais/strategyAnimais";
import { AnimalCard } from "../AnimalCard";
import { Mensagem } from "../Mensagem";
import { OptionGerenciar } from "../OptionGerenciar";
import styles from "./styles.module.css";
interface GerenciarAnimaisModalProps {
  setModal: () => void,
  habbitat?: AnimalHabbitat
}
export function GerenciarAnimaisModal({setModal, habbitat}:GerenciarAnimaisModalProps){
  const [mensagem, setMensagem] = useState("")
  const [isMensagemVisible, setIsMensagemVisible] = useState(false);

  const cuidarAnimais = [
    new AlimentarStrategy("/animais/animais/racao-para-animais.png"),
    new DarCarinhoStrategy("/animais/animais/coracao.png"),
    new LimparStrategy("/animais/animais/ferramentas-de-limpeza.png")
  ]

  function handleStrategy(strategy: StrategyAnimais){
    let texto = habbitat.gerenciarAnimais(strategy);
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
        <h1>Selecione o animal e escolha o que deseja fazer</h1>
        <div className={styles.container_list_animal}>
          {
            habbitat.getAnimaisNoLocal().map((animal, index) => {
              return (
                <AnimalCard
                  key={index}
                  imagem={animal.obtemImagem()}
                />
              );
            })
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
            cuidarAnimais.map((strategy, index) => {
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