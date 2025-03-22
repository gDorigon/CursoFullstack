"use strict";
// 4 Modificadores: public, private, protected, readonly
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    mudarCargo() {
        console.log("Alterando cargo...");
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
usuario1.cargo = "Designer";
usuario1.mudarCargo();
console.log(usuario1);
