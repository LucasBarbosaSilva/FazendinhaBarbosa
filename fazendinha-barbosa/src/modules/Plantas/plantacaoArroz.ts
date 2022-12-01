import { Plantacao } from "./plantacao";

export class PlantacaoArroz extends Plantacao{
    constructor(){
        let cultura = "Arroz";
        let imagem = "/plantas/alimentos/arroz.png";
        super(cultura, imagem);
    }

    public semear(): string{
        return "Semeando o Arroz...";
    }
}