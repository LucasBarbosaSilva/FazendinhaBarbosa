import { Plantacao } from "./plantacao"

export class PlantacaoBatata extends Plantacao{
    constructor(
        cultura: string, 
        imagem: string
        ){
        super(cultura, imagem);
    }

    public semear(): string{
        return "Semeando a Batata...";
    }
}
