import { Plantacao } from "./plantacao"

export class PlantacaoBatata extends Plantacao{
    constructor(){
        let cultura = "Batata";
        let imagem = "/plantas/alimentos/batata.jpg";
        super(cultura, imagem);
    }

    public semear(): string{
        return "Semeando a Batata...";
    }
}
