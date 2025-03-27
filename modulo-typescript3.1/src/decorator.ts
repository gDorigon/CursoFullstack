
// target - recebe o construtor da nossa classe
// function logInfo(target: any){
//     console.log(target);
// }


function logInfo(mensagem: string){

    return (target: any)=>{
        console.log(`${mensagem}, ${target}`)
    }
}


@logInfo("Servidor está rodando")
class Sistema{

}

