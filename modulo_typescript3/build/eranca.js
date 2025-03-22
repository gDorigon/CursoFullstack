"use strict";
// 4 Modificadores: public, private, protected, readonly
class Usuario {
    constructor(id, nome, email) {
        this.nome = nome;
        this.email = email;
        this.id = id;
    }
    mudarCargo(cargo) {
        console.log("Alterando cargo para: ", cargo);
        console.log("USER ID:", this.id);
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
class Admin extends Usuario {
    constructor(id, nome, email, cargo, nivel) {
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
}
const usuario1 = new Admin(10, "Guilherme", "guilherme@teste.com", "Programador", 2);
console.log(usuario1);
usuario1.acessarAdmin();
