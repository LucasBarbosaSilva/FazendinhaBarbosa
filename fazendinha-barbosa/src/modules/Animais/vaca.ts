import { Animal } from "./animal";

export class Vaca extends Animal{
    private _produzLeite: boolean;

    constructor(nome: string, raca: string, imagem: string, peso: number, numero_patas: number, preco: number, produzLeite: boolean, status?:"Saudavel"|"Doente"){
        super(nome, imagem, numero_patas,peso, preco, raca, status);        
        this._produzLeite = produzLeite;
    }

    public comer(): string {
        let texto: string = "A vaca está comendo...";
        return texto;
    }

    public beber(): string {
        let texto: string = "A vaca está bebendo água...";
        return texto;
    }


    public andar(): string {
        let texto: string = "A vaca está andando...";
        return texto;
    }

    public emitirSom(): string {
        let texto: string = "A vaca está mujindo...";
        return texto;
    }

    public matarObterCarne(): number {
        return 12;
    }

    public ordenharVaca(): number {
        //return Math.random();
        return 10;
    }
}