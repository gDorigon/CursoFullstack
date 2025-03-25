"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = "123";
        this.nome = nome;
        this.idade = idade;
    }
    mostraId() {
        console.log(`ID do USER: ${this.id}`);
    }
}
const ana = new Pessoa("Ana Carol", 29);
console.log(ana.id);
