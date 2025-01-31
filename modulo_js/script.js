var area = document.getElementById('area');

function entrar(){
    var nome = prompt("Digite seu nome");

    if(nome === "" || nome === null){
        alert("Deu algo errado")
        area.innerHTML = "Clique no botão para acessar..."
    } else{
        area.innerHTML = "Bem vindo " + nome + " ";

        let botaoSair = document.createElement("button");
        botaoSair.innerHTML = "Sair da conta";

        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
    }

}


function sair(){
    alert("Até mais");
    area.innerHTML = "Você saiu";
}

function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2) /2;

    if(media >= 7){
        alert("Aluno aprovado! media: " + media);
    } else if( media < 7){
        alert("Aluno reprovado! media: " + media);
    }
}

function aluno(nome, curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso de " +curso;
    console.log(mensagem);
}