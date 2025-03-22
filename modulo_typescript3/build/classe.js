"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
}
const redBurguer = new Loja("RedBurguer", "Lanches");
const superSucos = new Loja("Sucao gelado", "sucos");
console.log(redBurguer.categoria);
console.log(superSucos.nome);
