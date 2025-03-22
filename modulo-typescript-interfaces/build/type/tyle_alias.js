"use strict";
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} | User: ${nome}`);
}
function logUsuario(uuid) {
    console.log(`Conta referente ao User: ${uuid}`);
}
function comprarItem(moeda) {
    console.log("Comprando com a moeda: ", moeda);
}
comprarItem("BRL");
