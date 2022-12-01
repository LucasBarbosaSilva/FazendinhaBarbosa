import { Animal } from "./animal";

export class Porco extends Animal{
    private _prontoProAbate: boolean;

    constructor(nome: string, raca: string, imagem: string, peso: number, numero_patas: number, preco: number, prontoProAbate: boolean, status?:"Saudavel"|"Doente"){
        super(nome, imagem, numero_patas,peso, preco, raca, status);        
        this._prontoProAbate = prontoProAbate;
    }

    public comer(): string {
        let texto: string = "O porco está comendo...";
        return texto;
    }

    public beber(): string {
        let texto: string = "O porco está bebendo água...";
        return texto;
    }


    public andar(): string {
        let texto: string = "O porco está andando...";
        return texto;
    }

    public emitirSom(): string {
        let texto: string = "O porco está fazendo oinc...";
        return texto;
    }

    public matarObterCarne(): number {
        return 7;
    }
}