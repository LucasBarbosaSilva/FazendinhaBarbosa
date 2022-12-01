import { Animal, AnimalProps  } from "./Animais/animal";
import { StrategyAnimais } from "./Ger_Animais/strategyAnimais";

export class AnimalHabbitat {
  private _nome: string;
  private _quantidadeAnimais: number;
  private _animaisNoLocal: Animal[];
  private _imagem: string;

  constructor (nome: string, quantidadeAnimais: number, animaisNoLocal: Animal[], imagem: string){
    this._nome = nome;
    this._quantidadeAnimais = quantidadeAnimais;
    this._animaisNoLocal = animaisNoLocal;
    this._imagem = imagem;
  }

  
  public getNome() : string {
    return this._nome;
  }

  public getQuantidadeAnimais() : number {
    this._quantidadeAnimais = this._animaisNoLocal.length;
    return this._quantidadeAnimais;
  }
  
  public getAnimaisNoLocal() : Animal[] {
    return this._animaisNoLocal;
  }

  public getImagem() : string {
    return this._imagem;
  }

  public adicionarAnimal(animal:Animal):boolean{
    this._animaisNoLocal.push(animal)
    return true;
  }
  

  public removerAnimal(index:number):boolean{
    this._animaisNoLocal.splice(index, 1)
    return true;
  }

  public gerenciarAnimais(strategy: StrategyAnimais):string{
    return strategy.gerenciar();
  }

}