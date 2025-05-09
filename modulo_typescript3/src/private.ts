
class Conta{
    // Private: não pode ser acessado ou modificado fora da classe
    private limite: number = 450;

    private aumentarLimit(quantidade: number){
        if(quantidade < 1000){
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`)
        } else {
            console.log(`Infelizmente seu limite foi reprovado`)
        }
    }

    protected solictarLimite(quantidade: number){
        return this.aumentarLimit(quantidade);
    }

    solicitarLimiteApp(estaAutenticado: boolean, quantidade: number): void|boolean {
        if(estaAutenticado){
            this.aumentarLimit(quantidade);
        } else {
            return false;
        }
    }
}

class BancoAfiliado extends Conta{

    limiteContaAfilidado(){
        return this.solictarLimite(1500);
    }
}

// const fulano = new Conta();
// fulano.solicitarLimiteApp(true, 800)
// console.log(fulano)

const joao = new BancoAfiliado();

joao.limiteContaAfilidado();
console.log(joao)