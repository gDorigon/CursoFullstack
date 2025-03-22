

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

const superSucos = new Loja("Sucao gelado", "sucos")

console.log(redBurguer.categoria)

console.log(superSucos.nome)