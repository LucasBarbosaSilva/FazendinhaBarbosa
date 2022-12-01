export interface AnimalProps {
    nome: string;
    raca: string;
    status?: "Saudavel"|"Doente";
    imagem: string;
    peso: number;
    numero_patas: number;
    preco: number;
}
export abstract class Animal{
    protected _nome: string;
    protected _raca: string;
    protected _status: "Saudavel"|"Doente";
    protected _imagem: string;
    protected _peso: number;
    protected _numero_patas: number;
    protected _preco: number;

    constructor(nome: string, imagem:string, numero_patas:number, peso: number, preco:number, raca:string, status?:"Saudavel"|"Doente"){
        this._nome = nome;
        this._raca = raca;
        this._status = status ? status : "Saudavel";
        this._imagem = imagem;
        this._peso = peso;
        this._numero_patas = numero_patas;
        this._preco = preco;
    }

    public obtemImagem():string{
        return this._imagem;
    }

    public abstract comer(): string;
    public abstract beber(): string;
    public abstract andar(): string;
    public abstract emitirSom(): string;
    public abstract matarObterCarne(): number;


}
