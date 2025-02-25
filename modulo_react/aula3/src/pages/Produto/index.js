import { useParams} from 'react-router-dom'

function Produto(){

    const { id } = useParams();

    return(
        <div>
           <h2> Detalhes do produto</h2>
           <span>Produto acessado: {id}</span>
        </div>
    )
}

export default Produto;