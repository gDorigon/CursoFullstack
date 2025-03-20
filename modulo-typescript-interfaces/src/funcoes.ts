

interface CursoProps{
    id: string;
    nome: string;
    preco: number;

    //Definir apenas a funcao e o que ela deve esperar e retornar
    promocao: (preco: number)=> void;
}

// function mostraPromocao(preco: number): void{
//     console.log(`Promoção no curso por apenas R$ ${preco} `);
// }

// const novoCurso: CursoProps = {
//     id: "1",
//     nome: "Curso Typescript",
//     preco: 750,
//     promocao: (preco: number): void =>{
//         console.log('Preço total: ', preco)
//     },
// }

// console.log(novoCurso)

// console.log(novoCurso.promocao(550))

interface SomaProps{
    (valor1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
    
    console.log('Resultado: ', valor1 + valor2);
    return valor1+valor2;
}

const resultado = somaNumeros(12,21);