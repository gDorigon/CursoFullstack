
type Uuid = string|number|null;


function acessar(uuid: Uuid, nome: string){
    console.log(`ID: ${uuid} | User: ${nome}`);
}

function logUsuario(uuid: Uuid){
    console.log(`Conta referente ao User: ${uuid}`)
}

// acessar(123, "Guilherme")

// acessar("55", "Matheus")

// logUsuario("123")

type Moedas = "BRL" | "EUR" | "USD";

function comprarItem(moeda: Moedas){
    console.log("Comprando com a moeda: ", moeda);
}

comprarItem("BRL");