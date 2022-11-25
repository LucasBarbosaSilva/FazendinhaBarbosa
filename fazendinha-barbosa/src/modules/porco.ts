import { Animal } from "./animal";

class Porco extends Animal{
    private _prontoProAbate: boolean;

    constructor(nome: string, raca: string, imagem: string, peso: number, numero_patas: number, preco: number, prontoProAbate: boolean){
        super({nome, raca, imagem, peso, numero_patas, preco});
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