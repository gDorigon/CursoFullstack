"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = connection;
exports.statusConnection = statusConnection;
function connection(info) {
    console.log("CONEXÃO REALIZADA COM SUSSECO: ", info.ip);
    return true;
}
function statusConnection() {
    console.log("SERVIDOR FUNCIONANDO 100%");
}
