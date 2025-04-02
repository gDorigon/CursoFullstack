import { useState } from "react"


interface InfoAlunoProps {
  nome: string;
  idade: string;
}

export default function App() {

  const [input, setInput] = useState("")
  const [idade, setIdade] = useState("")

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>()

  const [contador, setContador] = useState(0)


  function mostrarAluno() {

    setInfoAluno({
      nome: input,
      idade: idade,
    })

  }

  function adicionar() {
    setContador(valorAtual => valorAtual + 1)
  }

  function diminuir() {
    if (contador === 0) {
      return
    }
    setContador(valorAtual => valorAtual - 1)
  }


  return (
    <div>
      <h1> Conhecendo useState</h1>

      <input
        placeholder="Digite o nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br />
      <br />
      <input
        placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}

      />

      <br />
      <br />

      <button onClick={mostrarAluno}> Mostrar aluno </button>

      <hr />

      <h3> Bem vindo: {infoAluno?.nome}</h3>
      <h4> Idade: {infoAluno?.idade}</h4>

      <hr />

      <br />
      <br />
      <h1> Contador com useState</h1>

      <button onClick={adicionar}> + </button> {contador} <button onClick={diminuir}> - </button>
    </div>

  )
}

