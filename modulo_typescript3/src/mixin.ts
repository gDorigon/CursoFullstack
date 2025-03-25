import { applyMixins } from './mixin/applyMixin';

class Automovel{
    ligar():void{
        console.log("Automovel ligado")
    }

    desligar():void{
        console.log("Automovel desligado")
    }
}

class Especificacao{
    descricao: string;

    constructor(descricao: string){
        this.descricao = descricao;
    }
}

class Carro{
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

interface Carro extends Automovel, Especificacao{}

applyMixins( Carro, [Automovel, Especificacao]);

const gol = new Carro("Gol 1.6");

gol.descricao = "Carro mais vendido do Brasil";

gol.ligar();

console.log(gol)