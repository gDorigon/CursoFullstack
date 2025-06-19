import { Nome } from "../Nome"
import { UserContext } from "../../contexts/user"
import { useContext } from "react"

export function Alunos() {

   const { qtdAlunos, mudaNome } = useContext(UserContext)
   return (
      <div>
         <h3>
            Quantidade de alunos: {qtdAlunos}
            <br />
            <button onClick={() => mudaNome("Matheus")}>
               Mudar nome para Matheus
            </button>
            <br /><br />
            <Nome />
         </h3>
      </div>
   )
}