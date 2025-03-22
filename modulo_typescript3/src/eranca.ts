
// Herança > quanto nós temos uma classe que herda outra classe

class Usuario{
    nome: string;
    email: string;

    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
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

console.log(usuario1)