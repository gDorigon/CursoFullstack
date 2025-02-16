// REST Operator

// function convidados(...nomes){
//     console.log("SEJAM BEM VINDOS");
//     console.log(nomes);
// }


// convidados("Mateus", "Lucas", "Maria", "Guilherme");


function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log(numeros[numeroGerado]);
}

sorteador(1,2,3,4,5,6,7,8,9, 10, 11, 12, 13, 14);