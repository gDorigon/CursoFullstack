import { useState } from "react"
import { Alunos } from "./components/Alunos"
import UserProvider from "./contexts/user"

function App() {
  const [nome, setNome] = useState("Sujeito Programador")

  return (
    <UserProvider>
      <div>
        <h1>Escola DEV</h1>
        <hr />

        <Alunos alunoNome={nome} changeName={(name: string) => setNome(name)} />
      </div>
    </UserProvider>
  )
}

export default App
