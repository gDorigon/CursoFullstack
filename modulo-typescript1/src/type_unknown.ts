
// tipo desconhecido -> Quando você não sabe o tipo que vai receber 

let total: unknown;

total = 100;

total = "23213";

total = {
    total: 100
}

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido;

// Valor do tipo unknown só podem ser atribuidos ao tipo unknown ou any
let totalEntrega: any = totalPedido;

console.log(totalEntrega)