import { Link } from "react-router";

export function Contato() {
    return (
        <div>
            <h1>Bem vindo a pagina contatos</h1>

            <h3>Telefone: (XX)XXXXX-XXXX</h3>

            <br />
            <Link to="/"> Home </Link>
        </div>
    )
}