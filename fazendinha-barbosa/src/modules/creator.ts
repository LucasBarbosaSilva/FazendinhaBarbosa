import { Animal } from "./Animais/animal";
import { Cavalo } from "./Animais/cavalo";
import { Galinha } from "./Animais/galinha";
import { Ovelha } from "./Animais/ovelha";
import { Pato } from "./Animais/pato";
import { Porco } from "./Animais/porco";
import { Vaca } from "./Animais/vaca";

export class Creator{
    public static comprarAnimal(codigoAnimal: number): Animal{
        switch(codigoAnimal){
            case 0:
                let galinha = new Galinha("Matilde", "pura", "/animais/bichos/galinha.png", 5, 2,  48.9,  true);
                return galinha;
            case 1:
                let ovelha = new Ovelha("Fernanda", "pura", "/animais/bichos/ovelha.png", 10, 4, 112.5, true);
                return ovelha;
            case 2:
                let pato = new Pato("Veveta", "pura", "/animais/bichos/pato.png", 5, 2,  92.5,  true);
                return pato;
            case 3:
                let vaca = new Vaca("Mimmy", "pura com manchas pretas", "/animais/bichos/vaca.png", 90, 4,  474.9,  true);
                return vaca;
            case 4:
                let porco = new Porco("Pedro", "puro", "/animais/bichos/porco.png", 20, 4,  139.9,  true);
                return porco;
            case 5:
                let cavalo = new Cavalo("Pé de Pano", "pura", "/animais/bichos/cavalo.png", 43, 4,  399.9,  true, 20);
                return cavalo;
            default:
                let galinhaPadrao = new Galinha("Matilde", "pura", "/animais/bichos/galinha.png", 5, 2,  48.9,  true);
                return galinhaPadrao;
        }
    }
}