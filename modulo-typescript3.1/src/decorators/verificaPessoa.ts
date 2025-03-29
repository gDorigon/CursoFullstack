


export function verificaPessoa(idade: number){

    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        // console.log("Target: ", target)
        // console.log("Key: ", key)
        // console.log("Descriptor: ", descriptor)

        const metodoOriginal = descriptor.value // Salvar nosso método original

        descriptor.value = function () {
            if(idade< 18){
                console.log("Cadastro como menor de idade")
                return metodoOriginal.apply(this)
            } else {
                console.log("Adulto cadastrado no sistema")
                return metodoOriginal.apply(this)
            }
        }
    }
}