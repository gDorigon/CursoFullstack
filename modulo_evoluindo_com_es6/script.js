
// DESAFIO MODULO ES6

//1.  ​Crie uma lista de produtos

//  A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.

// 2.
//  Mostre no console quantos produtos tem nessa lista.

// 3. 
//  Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.

// 4.
//  Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.

//5. 
//  Remova o segundo item da sua lista.

//6. 
// Crie uma lista de apenas numeros 1,3,5,7,0,9​

// 7.
//  Ordene essa lista do menor para o maior.

// 8.
//  Retire o primeiro numero desta lista.

// 9.
//  Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]

// 10.
// Crie uma string que contenha o dia de hoje, exemplo: 
// let hoje = '20/07/2019';

// 11.
//  Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.

 
// 1.
//  let produtos = ["Computador", "Telefone", "Mouse", "Teclado"]; 

 // 2.
//  console.log(produtos.length);

 //3.
//  produtos.splice(1, 1);
//  console.log(produtos);

 //4.

//  produtos.map((item)=>{
//     if(item === "Computador"){
//         return console.log("O produto computador existe");
//     }
//  });

 // 5.
//  produtos.splice(1, 1);
//  console.log(produtos)

// 6.
let numeros = [1, 3, 5, 7, 9];

// 7.
numeros.sort((a,b) => a - b);
console.log(numeros)

// 8. 
numeros.pop();

// 9.

numeros.sort((a,b) => b - a);
console.log(numeros);

// 10.

let hoje = '20/07/2019';

// 11.
let partes = hoje.split('/');

let dia = partes[0];  // '20'
let mes = partes[1];  // '07'
let ano = partes[2];  // '2019'

console.log(dia, mes, ano);