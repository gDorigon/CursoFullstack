import { Link } from "react-router"
import "./header.css"

export function Header() {
    return (
        <header>
            <h2>Sujeito programador</h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
            </div>
        </header>
    )
}