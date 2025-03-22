

type Status = "ABERTO" | "FECHADO";

class Loja{
    //Atributos
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string){
        this.nome = nome;
        this.categoria = categoria;
    }

    criarLoja(){
        console.log(`Loja ${this.nome}, categoria: ${this.categoria} criada!`)
    }

    emitirPedido(mesa: number, ...pedidos: string[]): string {

        pedidos.map((pedido)=>{
            console.log(`Saindo novo pedido: ${pedido}`)
        })
        return `Pedido na mesa: ${mesa}`;
    }

    mudarStatus(status: Status): void{
        if(status === "ABERTO"){
            console.log("LOJA ABERTA COM SUCESSO");
        } else {
            console.log("LOJA FECHADA")
        }
    }
}

const redBurguer = new Loja("Red Burguer", "Lanches");

redBurguer.criarLoja();

const retornoLoja = redBurguer.emitirPedido(12, "Suco gelado", "hamburguer duplo", "coca 2L");

redBurguer.mudarStatus("ABERTO")

console.log(retornoLoja);

