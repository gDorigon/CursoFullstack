"use strict";
// let loja: object;
// const BurguerK: lojaProps = {
//     nome: "BurguerK",
//     endereco: "Rua logo ali",
//     status: true,
//     produtoPromocao: "Burguer Duplo"
// }
// console.log(BurguerK)
function novaLoja({ nome, endereco, status }) {
    console.log("========================================");
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja ${endereco}`);
    if (status === true) {
        console.log(`Loja ${nome} Aberta`);
    }
    else {
        console.log(`Loja está ${nome} Fechada`);
    }
    console.log("========================================");
}
novaLoja({ nome: "Red Burguer", endereco: "Rua Logo Ali", status: false });
novaLoja({ nome: "Planet Burguer", endereco: "Rua Dorigoat", status: true });
