
// target - recebe o construtor da nossa classe
// function logInfo(target: any){
//     console.log(target);
// }


// function logInfo(mensagem: string){

//     return (target: any)=>{
//         console.log(`${mensagem}, ${target}`)
//     }
// }


// @logInfo("Servidor está rodando")
// class Sistema{

// }

// ================ Praticando

function setIpServidor(novoIp: string){
    return (target: any) => { // target = é o construtor da classe
        return class extends target{
            ip = novoIp
        }
    }
}

@setIpServidor("192.168.12.10")
class Servidor{

}


const servidor1 = new Servidor();

console.log(servidor1);

