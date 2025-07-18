import { useContext } from "react"
import { UserContext } from "../../contexts/user"


export function Footer() {

   const { qtdAlunos, novoAluno } = useContext(UserContext)
   return (
      <footer>
         <hr />
         <h3>Footer</h3>
         <h4>
            Alunos online na plataforma: {qtdAlunos}
            <br />
            <button onClick={() => {
               novoAluno()
            }}>
               Novo aluno
            </button>
         </h4>
      </footer>
   )
}