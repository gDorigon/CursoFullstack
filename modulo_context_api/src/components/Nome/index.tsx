import { UserContext } from "../../contexts/user"
import { useContext } from "react"

export function Nome() {

   const { aluno } = useContext(UserContext)
   return (
      <div>
         <strong>Aluno: {aluno}</strong>
      </div>
   )
}