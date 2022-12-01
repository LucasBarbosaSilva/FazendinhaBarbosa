import { StrategyPlantas } from "../Ger_Plantas/strategyPlantas";

export abstract class Plantacao{
  protected _cultura: string;
  protected _imagem: string;
  protected _plantado: boolean;
  protected _status: string;
                  // "Vazio";

  constructor(
    cultura:string, 
    imagem:string,
  ){
    this._cultura = cultura;
    this._status = "Vazio";
    this._imagem = imagem;
    this._plantado = true;
  }

  public getImagem():string{
    return this._imagem;
  }
  
  public plantar():string[]{
    let passos = []
    passos.push(this.arar())
    passos.push(this.subsolar())
    passos.push(this.gradagem())
    passos.push(this.semear())
    return passos;
  }
  public arar():string{
    return "Arando";
  }
  public subsolar():string{
    return "Subsolando";
  }
  public gradagem():string{
    return  "Gradando";
  }
  
  public abstract semear():string;

  public cuidarPlantas(strategy:StrategyPlantas): string{
    return strategy.cuidar();
  }
}