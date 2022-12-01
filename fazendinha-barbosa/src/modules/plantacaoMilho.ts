import { Plantacao } from "./plantacao";

export class PlantacaoMilho extends Plantacao{
    constructor(
        cultura: string,
        imagem: string
    ){
        super(cultura, imagem);
    }

    public semear(): void{
        //return "Semeando o Milho...";
    }
}