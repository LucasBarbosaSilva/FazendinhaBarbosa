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

export default function Home() {
  const [habbitats, setHabbitats] = useState<AnimalHabbitat[]>([]);
  const [plantacoes, setplantacoes] = useState<Plantacao[]>([]);
  const [isOpenModalGerenciarAnimal, setIsOpenModalGerenciarAnimal] = useState(false);
  const [isOpenModalGerenciarPlantacao, setIsOpenModalGerenciarPlantacao] = useState(false);
  const [habbitatModal, setHabbitatModal] = useState<AnimalHabbitat>();
  const Plantacao = new PlantacaoArroz("arroz", "/plantas/alimentos/arroz.png");
  useEffect(() => {
    const galinha1 = new Galinha("Tia Cocó", "pura", "/animais/bichos/galinha.png",43, 2,  48.9,  true)
    const galinha2 = new Galinha("Maria Chiquinha", "pura", "/animais/bichos/galinha.png",43, 2,  48.9,  true)
    const galinha3 = new Galinha("Matilde", "pura", "/animais/bichos/galinha.png",43, 2,  48.9,  true)
    const animaisNoLocalGalinheiro = [galinha1, galinha2, galinha3]
    const galinheiro = new AnimalHabbitat("Galinheiro",animaisNoLocalGalinheiro.length, animaisNoLocalGalinheiro, "/animais/locais/galinheiro.jpg" );
    const cavalo1 = new Cavalo("Pé de Pano", "pura", "/animais/bichos/cavalo.png",43, 2,  48.9,  true, 20)
    const cavalo2 = new Cavalo("Aristeu", "pura", "/animais/bichos/cavalo.png",43, 2,  48.9,  true, 25)
    const cavalo3 = new Cavalo("Burreco", "pura", "/animais/bichos/cavalo.png",43, 2,  48.9,  true, 30)
    const animaisNoLocalEstabulo = [cavalo1, cavalo2, cavalo3]
    const estabulo = new AnimalHabbitat("Estábulo",1, animaisNoLocalEstabulo, "/animais/locais/estabulo.jpg" );
    setHabbitats([galinheiro, estabulo])
  },[habbitats])
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
  return (
    <div className={styles.container}>
      
      {isOpenModalGerenciarAnimal && <GerenciarAnimaisModal habbitat={habbitatModal} setModal={() => closeModalAnimal()} />}
      {isOpenModalGerenciarPlantacao && <GerenciarPlantasModal plantacao={Plantacao} setModal={() => closeModalPlantacao()}/> }
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
                      />
            })
          }
          
        </div>
        <div className={styles.container_plantas}>
          <PlantacaoComponente
            setModal={() => openModalPlantacao()}
          />
          <NovaPlantacao/>
        </div>
      </div>
    </div>
  )
}
