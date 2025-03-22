"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria} criada!`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("LOJA ABERTA COM SUCESSO");
        }
        else {
            console.log("LOJA FECHADA");
        }
    }
}
const redBurguer = new Loja("Red Burguer", "Lanches");
redBurguer.criarLoja();
const retornoLoja = redBurguer.emitirPedido(12, "Suco gelado", "hamburguer duplo", "coca 2L");
redBurguer.mudarStatus("ABERTO");
console.log(retornoLoja);
