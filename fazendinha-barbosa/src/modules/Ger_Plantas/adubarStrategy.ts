import { StrategyPlantas } from "./strategyPlantas";

export class AdubarStrategy implements StrategyPlantas{
    private imagem: string;

    constructor(imagem: string){
        this.imagem = imagem;
    }

    public getImagem():string {
        return this.imagem;
    }
    
    public cuidar(): string{
        return "Adubando...";
    }
}