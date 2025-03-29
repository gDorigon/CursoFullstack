

// Decorator de método, ele só é chamado qunado nosso método for chamado em algum local

function verificaPessoa(idade: number){

    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        // console.log("Target: ", target)
        // console.log("Key: ", key)
        // console.log("Descriptor: ", descriptor)

        const metodoOriginal = descriptor.value // Salvar nosso método original

        descriptor.value = function () {
            if(idade< 18){
                console.log("Cadastro como menor de idade")
                return metodoOriginal.apply(this)
            } else {
                console.log("Adulto cadastrado no sistema")
                return metodoOriginal.apply(this)
            }
        }
    }
}


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