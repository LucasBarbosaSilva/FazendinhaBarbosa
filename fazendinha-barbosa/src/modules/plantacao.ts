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

  constructor(
    cultura:string, 
    imagem:string,
  ){
    this._cultura = cultura;
    this._status = "Vazio";
    this.plantar();
    this._imagem = imagem;
    this._plantado = true;
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

  public cuidarPlantas():void{

  }
}