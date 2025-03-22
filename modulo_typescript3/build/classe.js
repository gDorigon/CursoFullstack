"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
}
const redBurguer = new Loja("RedBurguer", "Lanches");
console.log(redBurguer.categoria);
