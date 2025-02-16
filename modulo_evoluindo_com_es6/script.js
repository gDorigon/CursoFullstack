// FIND

// let listagem = [5,3 , "Jose", 2, "Mateus", "Guilherme"];
// let busca = listagem.find((item)=>{

//     if(item === "Jose"){
//         return console.log("ENCONTRADO");
//     }
// });

// console.log(busca);

// FILTER

let palavras = ["Mateus", "Guilherme", "Ana", "Jose", "Ricardo"];

let resultado = palavras.filter((item)=>{

    return item.length <= 6;
})

console.log(resultado);