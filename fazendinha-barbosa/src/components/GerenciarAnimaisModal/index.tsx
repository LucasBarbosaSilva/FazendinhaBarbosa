import { useState } from "react";
import { AnimalCard } from "../AnimalCard";
import { OptionGerenciar } from "../OptionGerenciar";
import styles from "./styles.module.css";
export function GerenciarAnimaisModal(){
  const cuidarAnimais = [
    "/animais/animais/acougueiro.png",
    "/animais/animais/coracao.png",
    "/animais/animais/ferramentas-de-limpeza.png",
    "/animais/animais/racao-para-animais.png"
  ]
  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h1>Selecione o animal e escolha o que deseja fazer</h1>
        <div className={styles.container_list_animal}>
          <AnimalCard
            imagem="/animais/bichos/galinha.png"
          />
          <AnimalCard
            imagem="/animais/bichos/galinha.png"
          />
        </div>
        <div className={styles.container_footer}>
          {
            cuidarAnimais.map((path, index) => {
              return <OptionGerenciar
                  imagem={path}
                  key={index}
                />;
            })
          }
        </div>
        
      </div>
    </div>
  );
}