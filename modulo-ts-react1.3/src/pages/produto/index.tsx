import { useParams } from "react-router"

export function Produto() {

    const { id } = useParams();

    return (
        <div>
            <h1> Nome do produto: {id}</h1>
        </div>
    )
}