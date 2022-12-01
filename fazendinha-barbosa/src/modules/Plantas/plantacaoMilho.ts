import { Plantacao } from "./plantacao";

export class PlantacaoMilho extends Plantacao{
    constructor(){
        let cultura= "Milho";
        let imagem= "/plantas/alimentos/milho.jpg"; 
        super(cultura, imagem);
    }

    public semear(): string{
        return "Semeando o Milho...";
    }
}