import {Link} from 'react-router-dom'

function Erro(){
    return(
        <div>
            <h2> Parece que essa página n existe </h2>
            <Link to="/">Ir para página inicial</Link>
        </div>
    )
}

export default Erro;