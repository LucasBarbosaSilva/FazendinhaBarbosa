import { Plantacao } from "./plantacao";

export class PlantacaoFeijao extends Plantacao{
    constructor(){
        let cultura = "Feijão";
        let imagem = "/plantas/alimentos/feijao.webp";
        super(cultura, imagem);
    }

    public semear(): string{
        return "Semeando o Feijão...";
    }
}