function gerarNumeroMega(qtdNumeros){

    if(qtdNumeros < 6 || qtdNumeros > 9){
        console.log("Numero inválido");
        return[];
    }

    const numeros = [];

    while(numeros.length < qtdNumeros){
        const numeroAleatorio = Math.floor(Math.random() * 60) +1;
        
        if(!numeros.includes(numeroAleatorio)){
            numeros.push(numeroAleatorio);
        }
    }

    return numeros;

}


const numerSorteado = gerarNumeroMega(6);
console.log(numerSorteado);