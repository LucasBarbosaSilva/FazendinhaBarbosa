import {Animal} from "./animal"

export class Cavalo extends Animal{
    private _adestrado: boolean;
    private _velocidade: number;

    constructor(
        nome: string, 
        raca: string, 
        imagem: string, 
        peso: number, 
        numero_patas: number, 
        preco: number, 
        adestrado: boolean, 
        velocidade: number, 
        status?:"Saudavel"|"Doente"
    ){
        super(nome, imagem, numero_patas,peso, preco, raca, status);
        this._adestrado = adestrado;
        this._velocidade = velocidade;
    }

    public comer(): string {
        let texto: string = "O cavalo está comendo...";
        return texto;
    }

    public beber(): string {
        let texto: string = "O cavalo está bebendo água...";
        return texto;
    }


    public andar(): string {
        let texto: string = "O cavalo está andando...";
        return texto;
    }

    public emitirSom(): string {
        let texto: string = "O cavalo está relinhchando...";
        return texto;
    }

    public matarObterCarne(): number {
        return 10;
    }
}