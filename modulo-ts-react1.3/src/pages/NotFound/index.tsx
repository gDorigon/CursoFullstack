import { Link } from "react-router";


export function NotFound() {
    return (
        <div>
            <h1>Página não encontrada</h1>
            <h3>Erro 404</h3>
            <br />
            <br />
            <br />
            <Link to="/"> Voltar para HOME </Link>
        </div>
    )
}