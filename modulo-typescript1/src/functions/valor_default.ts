// como deixar valor por defaul ou opicional


// function cadastro(email:string, senha:string, nome = "Aluno", idade?: number):void{ // ?na variavel faaz ele também ser como undefinied, assim não sendo necessário o uso

//     let data = {email, senha, nome, idade}

//     console.log(data)
// }

// cadastro("teste@teste.com", "123123", "Guilheme", 21);

function cadastroLoja(nome: string, email:string, status = false): boolean{

    console.log("Status atual da loja: ", status);

    return status
}

cadastroLoja("Guilherme", "teste@teste.com");