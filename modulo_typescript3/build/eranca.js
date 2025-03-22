"use strict";
// Herança > quanto nós temos uma classe que herda outra classe
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    constructor(nome, email, cargo, nivel) {
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
}
const usuario1 = new Admin("Guilherme", "guilherme@teste.com", "Programador", 2);
console.log(usuario1);
