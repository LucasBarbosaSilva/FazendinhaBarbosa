import { Animal } from "./animal";

export class Pato extends Animal{
    private _pondoOvos: boolean;

    constructor(nome: string, raca: string, imagem: string, peso: number, numero_patas: number, preco: number,pondoOvos: boolean, status?:"Saudavel"|"Doente"){
        super(nome, imagem, numero_patas,peso, preco, raca, status);        
        this._pondoOvos = pondoOvos;
    }

    public comer(): string {
        let texto: string = "O pato está comendo...";
        return texto;
    }

    public beber(): string {
        let texto: string = "O pato está bebendo água...";
        return texto;
    }


    public andar(): string {
        let texto: string = "O pato está andando...";
        return texto;
    }

    public emitirSom(): string {
        let texto: string = "O pato está grasnando...";
        return texto;
    }

    public matarObterCarne(): number {
        return 5;
    }

    public coletarOvos(): number{
        //return Math.random();
        return 1;
    }
}