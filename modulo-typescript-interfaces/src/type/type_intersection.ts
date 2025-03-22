

type Info = {
    id: number;
    nome: string;
    descricao?: string;
}


const produtoInfo: Info = {
    id: 1,
    nome: "Placa de video",
    descricao: "GTX 2020"
}

type Categoria = {
    slug: string,
    quantidadeProduto: number;
}

const categoria1: Categoria = {
    slug: "hardware",
    quantidadeProduto: 2
}

type ProdutoInfo = Info & Categoria; //produtoInfo é a união entre info e categoria

const novoProduto: ProdutoInfo = {
    id: 5431,
    nome: "Teclado RGB",
    slug: "Teclado mecanico abnt2",
    quantidadeProduto: 10
}

console.log(novoProduto)