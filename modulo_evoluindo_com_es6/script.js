// // MAP

// let lista = ["Guilherme", "Patricia", "Eduardo", "Leomir", "Leticya"];

// lista.map((item, index)=>{
//     console.log(`Passando: ${item}`);
//     console.log(`Posição da lsita: ${index}`);
// })

// Reduce = O reduce busca reduzir um array

let numero = [5,3,2];

let total = numero.reduce((acumulador, numero, indice, original)=>{

    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - numero atual`);
    console.log(`${indice} - indice atual`);
    console.log(`${original} - array original`);
    console.log("-------------------------------------------");

    return acumulador += numero;
})


console.log("TOTAL REDUCE " + total);