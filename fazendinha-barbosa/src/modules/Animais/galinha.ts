import { Animal } from "./animal";

export class Galinha extends Animal{
    private _pondoOvos: boolean;

    constructor(nome: string, raca: string, imagem: string, peso: number, numero_patas: number, preco: number,pondoOvos: boolean, status?:"Saudavel"|"Doente"){
        super(nome, imagem, numero_patas,peso, preco, raca, status);        
        this._pondoOvos = pondoOvos;
    }

    public comer(): string {
        let texto: string = "A galinha está comendo...";
        return texto;
    }

    public beber(): string {
        let texto: string = "A galinha está bebendo água...";
        return texto;
    }


    public andar(): string {
        let texto: string = "A galinha está andando...";
        return texto;
    }

    public emitirSom(): string {
        let texto: string = "A galinha está cocoricando...";
        return texto;
    }

    public matarObterCarne(): number {
        return 5;
    }

    public coletarOvos(): number{
        //return Math.random();
        return 3;
    }
}