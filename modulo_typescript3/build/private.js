"use strict";
class Conta {
    constructor() {
        // Private: não pode ser acessado ou modificado fora da classe
        this.limite = 450;
    }
    aumentarLimit(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
        else {
            console.log(`Infelizmente seu limite foi reprovado`);
        }
    }
    solictarLimite(quantidade) {
        return this.aumentarLimit(quantidade);
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimit(quantidade);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limiteContaAfilidado() {
        return this.solictarLimite(1500);
    }
}
// const fulano = new Conta();
// fulano.solicitarLimiteApp(true, 800)
// console.log(fulano)
const joao = new BancoAfiliado();
joao.limiteContaAfilidado();
console.log(joao);
