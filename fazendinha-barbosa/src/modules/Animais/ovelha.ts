import { Animal } from "./animal";

export class Ovelha extends Animal{
    private _comLan: boolean;

    constructor(nome: string, raca: string, imagem: string, peso: number, numero_patas: number, preco: number, comLan: boolean, status?:"Saudavel"|"Doente"){
        super(nome, imagem, numero_patas,peso, preco, raca, status);        
        this._comLan = comLan;
    }

    public comer(): string {
        let texto: string = "A ovelha está comendo...";
        return texto;
    }

    public beber(): string {
        let texto: string = "A ovelha está bebendo água...";
        return texto;
    }


    public andar(): string {
        let texto: string = "A ovelha está andando...";
        return texto;
    }

    public emitirSom(): string {
        let texto: string = "A ovelha está balindo...";
        return texto;
    }

    public matarObterCarne(): number {
        return 6;
    }

    public tosquear(): number{
        return 4;
    }
}