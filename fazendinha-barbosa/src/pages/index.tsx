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
import { CreatorAnimal } from '../modules/creatorAnimais'
import { CreatorPlantas } from '../modules/creatorPlantas'
import { randomInt } from 'crypto'
import { Mensagem } from '../components/Mensagem'
import { setMaxIdleHTTPParsers } from 'http'
import { PlantacaoMilho } from '../modules/Plantas/plantacaoMilho'

export default function Home() {
  const galinheiro = new AnimalHabbitat("Galinheiro",0, [], "/animais/locais/galinheiro.jpg" );
  const curralOvelhas = new AnimalHabbitat("Curral de Ovelhas",0, [], "/animais/locais/Ovelhas.jpg" );
  const lagoPatos = new AnimalHabbitat("Lago dos Patos",0, [], "/animais/locais/patos.jpg" );
  const curralVacas = new AnimalHabbitat("Curral de Vacas",0, [], "/animais/locais/vacas.jpg" );
  const chiqueiro = new AnimalHabbitat("Chiquiero",0, [], "/animais/locais/porcos.jpg" );
  const estabulo = new AnimalHabbitat("Estábulo",0, [], "/animais/locais/cavalos.jpg" );
  const [habbitats, setHabbitats] = useState<AnimalHabbitat[]>([
                                                                galinheiro, 
                                                                curralOvelhas, 
                                                                lagoPatos, 
                                                                curralVacas,
                                                                chiqueiro,
                                                                estabulo]);
  const plantacaoArroz = new PlantacaoArroz();
  const [plantacoes, setPlantacoes] = useState<Plantacao[]>([plantacaoArroz]);

  const [isOpenModalGerenciarAnimal, setIsOpenModalGerenciarAnimal] = useState(false);
  const [isOpenModalGerenciarPlantacao, setIsOpenModalGerenciarPlantacao] = useState(false);
  const [habbitatModal, setHabbitatModal] = useState<AnimalHabbitat>();
  const [plantacaoModal, setPlantacaoModal] = useState<Plantacao>(new PlantacaoMilho());
  const [mensagem, setMensagem] = useState("Vazio");
  const [mensagens, setMensagens] = useState([""]);
  const [isMensagemVisible, setIsMensagemVisible] = useState(false);
  
  function adicionarAnimal(index: number) {
    let animal = CreatorAnimal.comprarAnimal(index);
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

  function openModalPlantacao(index: number){
    setPlantacaoModal(plantacoes[index])
    setIsOpenModalGerenciarPlantacao(true)
  }

  function closeModalAnimal(){
    setIsOpenModalGerenciarAnimal(false)
  }

  function closeModalPlantacao(){
    setIsOpenModalGerenciarPlantacao(false)
  }
  function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function setarMensagem(mens:string){
    
  }
  async function addPlantacao(){
    let i = Math.floor(Math.random()*5);
    const plantacaoNova = CreatorPlantas.semearPlantacao(i);
    setIsMensagemVisible(true)
    let mens = plantacaoNova.plantar();
    setMensagem(mens[0]); 
    await sleep(1000);
    setMensagem(mens[1]); 
    await sleep(1000);
    setMensagem(mens[2]); 
    await sleep(1000);
    setMensagem(mens[3]); 
    await sleep(1000);
    setIsMensagemVisible(false)
    setPlantacoes([
      ...plantacoes,
      plantacaoNova
    ])

  }
  return (
    <div className={styles.container}>
      
      {isOpenModalGerenciarAnimal && <GerenciarAnimaisModal habbitat={habbitatModal} setModal={() => closeModalAnimal()} />}
      {isOpenModalGerenciarPlantacao && <GerenciarPlantasModal plantacao={plantacaoModal} setModal={() => closeModalPlantacao()}/> }
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
                        imagem={plantacao.getImagem()}
                        setModal={() => openModalPlantacao(index)}
                        key={index}
                      />);
            })
          }
          {
            isMensagemVisible &&
            <div className={styles.container_mensagem}>
              <Mensagem
                mensagem={mensagem}
              />  
            </div>          
          }
          <NovaPlantacao
            addPlantacao={() => addPlantacao()}
          />
        </div>
      </div>
    </div>
  )
}
