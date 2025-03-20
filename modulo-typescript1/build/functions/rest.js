"use strict";
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Você tem ${quantidadeVendas} realizadas`);
}
totalVendas(10, 30, 25, 100, 45, 13223, 4535, 2342345, 456456);
function mostraNomes(...nomes) {
    let totalNomes = nomes.length;
    console.log('Total de nomes na lista: ', totalNomes);
    nomes.map(nome => {
        console.log(nome);
    });
}
mostraNomes("Guilherme", "Caio", "Lucas", "Pedro");
