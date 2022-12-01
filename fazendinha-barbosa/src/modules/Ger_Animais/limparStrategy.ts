import { StrategyAnimais } from "./strategyAnimais";

export class LimparStrategy implements StrategyAnimais{
    private imagem: string;

    constructor(imagem: string){
        this.imagem = imagem;
    }

    public getImagem():string {
        return this.imagem;
    }
    
    public gerenciar(): string {
        return "Limpando...";
    }
}