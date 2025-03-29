"use strict";
// Decorator de método, ele só é chamado qunado nosso método for chamado em algum local
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function verificaPessoa(idade) {
    return (target, key, descriptor) => {
        // console.log("Target: ", target)
        // console.log("Key: ", key)
        // console.log("Descriptor: ", descriptor)
        const metodoOriginal = descriptor.value; // Salvar nosso método original
        descriptor.value = function () {
            if (idade < 18) {
                console.log("Cadastro como menor de idade");
                return metodoOriginal.apply(this);
            }
            else {
                console.log("Adulto cadastrado no sistema");
                return metodoOriginal.apply(this);
            }
        };
    };
}
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    cadastrarPessoa() {
        console.log(`Bem vindo ${this.nome} ao sistema`);
    }
}
__decorate([
    verificaPessoa(20)
], Pessoa.prototype, "cadastrarPessoa", null);
const pessoa1 = new Pessoa("Guilherme Dorigon");
pessoa1.cadastrarPessoa();
