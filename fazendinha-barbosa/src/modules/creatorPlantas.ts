import { Plantacao } from "./Plantas/plantacao";
import { PlantacaoArroz } from "./Plantas/plantacaoArroz";
import { PlantacaoBatata } from "./Plantas/plantacaoBatata";
import { PlantacaoFeijao } from "./Plantas/plantacaoFeijao";
import { PlantacaoMilho } from "./Plantas/plantacaoMilho";


export class CreatorPlantas{
    public static semearPlantacao(codigoPlantacao: number): Plantacao{
        switch(codigoPlantacao){
            case 0:
                let plantacaoArroz = new PlantacaoArroz();
                return plantacaoArroz;
            case 1:
                let plantacaoBatata = new PlantacaoBatata();
                return plantacaoBatata;
            case 2:
                let plantacaoFeijao = new PlantacaoFeijao();
                return plantacaoFeijao;
            default:
                let plantacaoMilho = new PlantacaoMilho();
                return plantacaoMilho;
        }
    }
}