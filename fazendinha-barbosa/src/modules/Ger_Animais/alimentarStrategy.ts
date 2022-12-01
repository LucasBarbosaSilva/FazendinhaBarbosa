import { StrategyAnimais } from "./strategyAnimais";

export class AlimentarStrategy implements StrategyAnimais{
    private imagem: string;

    constructor(imagem: string){
        this.imagem = imagem;
    }

    public getImagem():string {
        return this.imagem;
    }
    public gerenciar(): string {
        return "Alimentando...";
    }
}