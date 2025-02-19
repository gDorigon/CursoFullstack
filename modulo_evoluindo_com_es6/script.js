// 2) Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números. 

let array = [1,2,3,4,5,6,7,9,10, 20, 30, 40, 50, 60, 70 ,80, 90, 100];


function verificaNumero(arrayDeItens, Localizador){
    if(arrayDeItens.includes(Localizador)){
        return console.log("Possui o número");
    } else {
        return console.log("Não possui o número");
    }
}


verificaNumero(array, 51);