// ​1) Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.

let numero = 0;

function verificaNumero(numero){

    if(numero > 0){
        console.log("Número positivo");
    } else if(numero === 0){
        console.log("Número é 0");
    } else {
        console.log("Número negativo");
    }

}


verificaNumero(0);