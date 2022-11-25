import { AnimalProps  } from "./animal";
export interface AnimalHabbitatProps {
  nome: string;
  quantidadeAnimais: number;
  animaisNoLocal: AnimalProps[];
  imagem: string;
}
export class AnimalHabbitat {
  private _nome: string;
  private _quantidadeAnimais: number;
  private _animaisNoLocal: AnimalProps[];
  private _imagem: string;

  constructor ({nome, quantidadeAnimais, animaisNoLocal, imagem}:AnimalHabbitatProps){
    this._nome = nome;
    this._quantidadeAnimais = quantidadeAnimais;
    this._animaisNoLocal = animaisNoLocal;
    this._imagem = imagem;
  }

  public adicionarAnimal(animal:AnimalProps):boolean{
    this._animaisNoLocal.push(animal)
    return true;
  }

  public removerAnimal(index:number):boolean{
    this._animaisNoLocal.splice(index, 1)
    return true;
  }

}