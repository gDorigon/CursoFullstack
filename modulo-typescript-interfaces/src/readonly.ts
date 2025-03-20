
interface ProdutoProps{
    readonly id: string;
    nome: string;
    descricao: string;
}

let produto1: ProdutoProps=  {
    id: "1",
    nome: "Tenis nike",
    descricao: "Super Tenis",
}

// produto1.id = "123"

console.log(produto1.id)