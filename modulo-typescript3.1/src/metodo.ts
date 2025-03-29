

// Decorator de método, ele só é chamado qunado nosso método for chamado em algum local
import { verificaPessoa } from "./decorators/verificaPessoa";


class Pessoa{
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    @verificaPessoa(20)
    cadastrarPessoa(){
        console.log(`Bem vindo ${this.nome} ao sistema`)
    }
}

const pessoa1 = new Pessoa("Guilherme Dorigon")

pessoa1.cadastrarPessoa();