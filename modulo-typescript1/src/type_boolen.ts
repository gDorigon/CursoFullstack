

let estaAutenticado:Boolean = true;

let codeStatus: number = 222;

// tudo que for diferente de 0, string vazia e undefinied será verdadeiro
estaAutenticado = Boolean(codeStatus);

console.log(estaAutenticado);