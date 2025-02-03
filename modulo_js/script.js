function pedir(){
    var valor = prompt("Digite um valor de 1 a 4");

    switch(Number(valor)){
        case 1:
            alert("Você escolheu suco");
        break;

        case 2:
            alert("Você escolheu agua gelada");
        break;

        case 3:
            alert("Você escolheu sorvete");
        break;

        case 4:
            alert("Você escolheu garçom");
        break;

        default:
            alert("Opção inválida!");
        break;
    }
}