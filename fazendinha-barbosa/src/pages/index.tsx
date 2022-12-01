import { Habbitat } from '../components/Habbitat'
import { Header } from '../components/Header/Header'
import { NovaPlantacao} from '../components/NovaPlantacao'
import { Animal, AnimalProps } from '../modules/Animais/animal'
import {Galinha} from '../modules/Animais/galinha'
import { AnimalHabbitat } from '../modules/animalHabbitat'
import { Plantacao } from '../modules/Plantas/plantacao'
import styles from '../styles/pages/Home.module.css'
import { useEffect, useState } from 'react'
import { Cavalo } from '../modules/Animais/cavalo'
import PlantacaoComponente from '../components/Plantacao'
import { GerenciarAnimaisModal } from '../components/GerenciarAnimaisModal'
import { GerenciarPlantasModal } from '../components/GerenciarPlantas'
import { PlantacaoArroz } from '../modules/Plantas/plantacaoArroz'
import { Creator } from '../modules/creator'

export default function Home() {
  const galinheiro = new AnimalHabbitat("Galinheiro",0, [], "/animais/locais/galinheiro.jpg" );
  const curralOvelhas = new AnimalHabbitat("Curral de Ovelhas",0, [], "/animais/locais/Ovelhas.jpg" );
  const lagoPatos = new AnimalHabbitat("Lago dos Patos",0, [], "/animais/locais/patos.jpg" );
  const curralVacas = new AnimalHabbitat("Curral de Vacas",0, [], "/animais/locais/vacas.jpg" );
  const chiqueiro = new AnimalHabbitat("Chiquiero",0, [], "/animais/locais/porcos.jpg" );
  const estabulo = new AnimalHabbitat("Estábulo",0, [], "/animais/locais/estabulo.jpg" );
  const [habbitats, setHabbitats] = useState<AnimalHabbitat[]>([
                                                                galinheiro, 
                                                                curralOvelhas, 
                                                                lagoPatos, 
                                                                curralVacas,
                                                                chiqueiro,
                                                                estabulo]);
  const plantacaoArroz = new PlantacaoArroz("arroz", "/plantas/alimentos/arroz.png");
  const [plantacoes, setplantacoes] = useState<Plantacao[]>([plantacaoArroz]);

  const [isOpenModalGerenciarAnimal, setIsOpenModalGerenciarAnimal] = useState(false);
  const [isOpenModalGerenciarPlantacao, setIsOpenModalGerenciarPlantacao] = useState(false);
  const [habbitatModal, setHabbitatModal] = useState<AnimalHabbitat>();
  const [plantacaoModal, setPlantacaoModal] = useState<Plantacao>();

  function adicionarAnimal(index: number) {
    let animal = Creator.comprarAnimal(index);
    const habbitatNovos = habbitats.map((habbitat, i)=> {
      if (i === index){
        console.log("passou")
        habbitat.adicionarAnimal(animal)
        console.log(habbitat.getQuantidadeAnimais())
        return habbitat;
      }
      return habbitat;
    });
    console.log(habbitatNovos.at(index)?.getQuantidadeAnimais())
    setHabbitats(habbitatNovos);
  }
  
  
  function openModalAnimais(index: number){
    if (habbitats.at(index)?.getAnimaisNoLocal()) {
      let habbitat = habbitats.at(index); 
      setHabbitatModal(habbitat)
    }
    setIsOpenModalGerenciarAnimal(true)
  }

  function openModalPlantacao(){
    setIsOpenModalGerenciarPlantacao(true)
  }

  function closeModalAnimal(){
    setIsOpenModalGerenciarAnimal(false)
  }

  function closeModalPlantacao(){
    setIsOpenModalGerenciarPlantacao(false)
  }

  function addPlantacao(){
    const plantacaoNova = new PlantacaoArroz("arroz", "/plantas/alimentos/arroz.png");
    setplantacoes([
      ...plantacoes,
      plantacaoNova
    ])
  }
  return (
    <div className={styles.container}>
      
      {isOpenModalGerenciarAnimal && <GerenciarAnimaisModal habbitat={habbitatModal} setModal={() => closeModalAnimal()} />}
      {isOpenModalGerenciarPlantacao && <GerenciarPlantasModal plantacao={plantacaoArroz} setModal={() => closeModalPlantacao()}/> }
      <Header/>
      
      <div className={styles.container_celeiro}>
        <div className={styles.container_animais}>
          {
            habbitats.map((habbitat, index) =>{
              return <Habbitat 
                        key={index}
                        nome={habbitat.getNome()} 
                        animaisNoLocal={habbitat.getAnimaisNoLocal()}
                        imagem={habbitat.getImagem()}
                        quantidadeAnimais={habbitat.getQuantidadeAnimais()}
                        setModal={() => openModalAnimais(index)}
                        addAnimal={() => adicionarAnimal(index)}
                      />
            })
          }
          
        </div>
        <div className={styles.container_plantas}>
          {
            plantacoes.map((plantacao, index) => {
              return(<PlantacaoComponente
                        setModal={() => openModalPlantacao()}
                        key={index}
                      />);
            })
          }
          
          <NovaPlantacao
            addPlantacao={() => addPlantacao()}
          />
        </div>
      </div>
    </div>
  )
}
