import { StrategyPlantas } from "./strategyPlantas";

export abstract class Plantacao{
  protected _cultura: string;
  protected _imagem: string;
  protected _plantado: boolean;
  protected _status:
                  "Vazio"| 
                  "Arando"|
                  "Subsolando"|
                  "Gradando"|
                  "Semeando"|
                  "Semeado"|
                  "Brotando"|
                  "Crescendo"|
                  "Frutificando"|
                  "Maduro"|
                  "Doente";
  private strategy: StrategyPlantas;

  constructor(
    cultura:string, 
    imagem:string,
    strategy:StrategyPlantas
  ){
    this._cultura = cultura;
    this._status = "Vazio";
    this.plantar();
    this._imagem = imagem;
    this._plantado = true;
    this.strategy = strategy
  }
  
  public plantar():void{
    setTimeout(this.arar, 1000);
    setTimeout(this.subsolar, 1000);
    setTimeout(this.gradagem, 1000);
    setTimeout(this.semear, 1000);
  }
  public arar():void{
    this._status = "Arando";
  }
  public subsolar():void{
    this._status = "Subsolando";
  }
  public gradagem():void{
    this._status = "Gradando";
  }
  
  public abstract semear():void;

  //public cuidarPlantas():void{}

  public setStrategy(strategy:StrategyPlantas): void{
    this.strategy = strategy;
  }

  public cuidarPlantas(): void{
    this.strategy.cuidar;
  }
}