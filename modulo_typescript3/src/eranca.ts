
// 4 Modificadores: public, private, protected, readonly

class Usuario {
    protected id: number; // podemos chamar na classe pai ou classes que extende a classe usuario ( filhas )
    nome: string;
    email: string;

    constructor(id: number, nome: string, email: string) {
        this.nome = nome;
        this.email = email;
        this.id = id;
    }

    protected mudarCargo(cargo: string): void {
        console.log("Alterando cargo para: ", cargo)
        console.log("USER ID:", this.id);
    }

    acessarAdmin(){
       this.mudarCargo("Designer"); 
    }
}

class Admin extends Usuario {
    cargo: string;
    nivel: number;

    constructor(id: number, nome: string, email: string, cargo: string, nivel: number) {

        super(id, nome, email);

        this.cargo = cargo;
        this.nivel = nivel;
    }
}

const usuario1 = new Admin(10, "Guilherme", "guilherme@teste.com", "Programador", 2);

console.log(usuario1)

usuario1.acessarAdmin();

