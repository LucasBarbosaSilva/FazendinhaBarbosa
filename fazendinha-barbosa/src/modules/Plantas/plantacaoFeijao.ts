import { Plantacao } from "./plantacao";

export class PlantacaoFeijao extends Plantacao{
    constructor(
        cultura: string, 
        imagem: string
        ){
        super(cultura, imagem);
    }

    public semear(): string{
        return "Semeando o Feijão...";
    }
}