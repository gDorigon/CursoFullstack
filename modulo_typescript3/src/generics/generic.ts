

function repositorio<TipoVariavel extends string | number>(){

    let dados: TipoVariavel

    function getDados(){
        return dados;
    }

    function setDados(novoDado: TipoVariavel){
        dados = novoDado;
    }

    return {getDados, setDados}

}

const repo1 = repositorio<string | number>();

repo1.setDados("100");

repo1.setDados(15)

console.log(repo1.getDados())

const repo2 = repositorio<number>();
repo2.setDados(24);

console.log(repo2.getDados())