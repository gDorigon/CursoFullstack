// Caso de uso de um jogo

class Jogo{
    private servidor: string;
    private id: string = "1234"

    constructor(servidor: string){
        this.servidor = servidor;
    }

    //Metodo GET -> Pegar o valor ao invés de acessar diretamente a propriedade
    get getServidorIP(){
        console.log("== Metodo GET ==");
        return this.servidor;
    }

    //Metodo SET

    set setServidorIP(novoIp: string){
        if(this.servidor === novoIp){
            throw new Error("O novo IP deve ser diferente do antigo.");
        }
        this.servidor = novoIp;
    }
}

const GTA5 = new Jogo("192.168.5.10");

try{
    GTA5.setServidorIP = "192.200.255.255";
} catch{
    console.log(error.message);
}


console.log(GTA5.getServidorIP)

