// Propriedade Decorator

function validaNome(tamanho: number){
    //target - construtor da classe
    // key = nossa propriedade ( está recebendo o jogo.nome)
    return (target: any, key: string) => {
     let valor = target[key];

     const getter = () => valor;

     const setter = ( value: string ) => {
        if(value === ""){
            console.log("Você não pode deixar o nome em branco")
        } else if (value.length < tamanho){
            console.log("Nome do jogo muito curto")
        } else {
            valor = value;
        }

    }
    Object.defineProperty( target, key,{
        get: getter,
        set: setter
    })
    }
}




class Jogo{

    @validaNome(5)
    nome: string;

    @validaNome(15)
    titulo: string;

    constructor(nome: string, titulo: string){
        this.nome = nome;
        this.titulo = titulo;
    }
}

const jogo1 = new Jogo("LEFT4DEAD", "Jogo online legal");

console.log(jogo1.titulo)