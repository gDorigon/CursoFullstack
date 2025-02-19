// 3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:​

const products = [ { name: 'Maça', price: 2.5 }, { name: 'Coca cola', price: 8 }, { name: 'Guarana', price: 5 }, { name: 'Chocolate', price: 20 } ];


function produtoEncontrado() {
    const produto = products.find(produto => produto.price === 20);
    if (produto) {
        console.log(produto);
    } else {
        console.log("Nenhum produto com preço R$20 encontrado.");
    }
}

produtoEncontrado();

