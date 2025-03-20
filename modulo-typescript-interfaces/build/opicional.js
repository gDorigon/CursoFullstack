"use strict";
const novoUsuario = {
    email: "teste@teste.com",
    status: true,
};
//console.log(novoUsuario)
function novoUser(propriedades) {
    console.log(propriedades.email);
}
novoUser({ nome: "anan", email: "teste1@teste.com", status: true });
