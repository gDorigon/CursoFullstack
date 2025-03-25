"use strict";
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("==========");
        console.log(`Nova conta P.Fisica criada com sucesso: ${dados.nome}`);
        console.log("==========");
        return true;
    }
}
class PesosaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log("==========");
        console.log(`Nova conta P.Juridica criada com sucesso: ${dados.nome}`);
        console.log("==========");
        return true;
    }
}
const joana = new PessoaFisica();
joana.abrirConta({
    nome: "Joana Silva",
    numero: "1020-X",
    endereco: "Rua Arcindo Sardo, 1215"
});
const sujeitoProgramador = new PesosaJuridica();
sujeitoProgramador.abrirConta({
    nome: "Guilherme Dorigoat",
    numero: "12315-A",
    endereco: "Avenida 1, 15000"
});
