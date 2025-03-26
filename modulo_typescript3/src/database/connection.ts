
type Connection = {
    ip: string;
    name: string;
}

export function connection(info: Connection): boolean{
    console.log("CONEXÃO REALIZADA COM SUSSECO: ", info.ip)
    return true;
}

export function statusConnection(): void {
    console.log("SERVIDOR FUNCIONANDO 100%")
}