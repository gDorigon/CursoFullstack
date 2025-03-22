
// 4 Modificadores: public, private, protected, readonly

class Usuario{
    public nome: string;
    public email: string;

    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }

    mudarCargo(): void {
        console.log("Alterando cargo...")
    }
}

class Admin extends Usuario{
    cargo: string;
    nivel: number;

    constructor(nome: string, email: string, cargo: string, nivel: number){

        super(nome, email);

        this.cargo = cargo;
        this.nivel = nivel;
    }
}

const usuario1 = new Admin("Guilherme", "guilherme@teste.com", "Programador", 2);

usuario1.cargo = "Designer";

usuario1.mudarCargo();

console.log(usuario1)

