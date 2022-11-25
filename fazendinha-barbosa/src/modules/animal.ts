export abstract class Animal{
    protected _nome: string;
    protected _raca: string;
    protected _status: "Saudavel"|"Doente";
    protected _imagem: string;
    protected _peso: number;
    protected _numero_patas: number;
    protected _preco: number;

    constructor(nome: string, raca: string, imagem: string, peso: number, numero_patas: number, preco: number){
        this._nome = nome;
        this._raca = raca;
        this._status = "Saudavel";
        this._imagem = imagem;
        this._peso = peso;
        this._numero_patas = numero_patas;
        this._preco = preco;
    }

    public abstract comer(): string;
    public abstract beber(): string;
    public abstract andar(): string;
    public abstract emitirSom(): string;
    public abstract matarObterCarne(): number;


}
