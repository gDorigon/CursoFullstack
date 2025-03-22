

class Loja{
    //Atributos
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string){
        this.nome = nome;
        this.categoria = categoria
    }
}

const redBurguer = new Loja("RedBurguer", "Lanches");

console.log(redBurguer.categoria)