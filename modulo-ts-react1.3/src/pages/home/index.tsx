import { Link } from "react-router"

export function Home() {
    return (
        <div>
            <h1>Bem vindo a pagina home!</h1>

            <br />

            <Link to="/sobre"> Sobre </Link>
            <br />
            <Link to="/contato"> Contato </Link>
            <br />

        </div>


    )
}