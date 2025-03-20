

// function totalVendas(venda1:number, venda2: number, venda3: number, venda4: number): number{

//     const total = venda1 + venda2 + venda3 + venda4;

//     console.log(total)
//     return total;
// }

// totalVendas(10,40,50,100)

function totalVendas(...vendas: number[]){

    const quantidadeVendas = vendas.length;

    console.log(`Você tem ${quantidadeVendas} realizadas`);
}

totalVendas(10, 30, 25, 100, 45,13223,4535,2342345,456456);


function mostraNomes(...nomes: string[]){

    let totalNomes = nomes.length;
    console.log('Total de nomes na lista: ', totalNomes);
    nomes.map( nome => {
        console.log(nome);
    })
}

mostraNomes("Guilherme", "Caio", "Lucas", "Pedro");