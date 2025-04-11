import { useState } from 'react'


export default function App() {
  const [tasks, setTesks] = useState([
    'Estudar react com typescript',
    'Comprar pao meio dia',
    'Estudar ingles a noite'
  ])

  function handleRegister() {
    if (!input) {
      alert("Preencha o nome da tarefa")
    }

    setTesks(tarefas => [...tarefas, input])
    setInput("")
  }

  const [input, setInput] = useState("")
  return (
    <div>
      <h1> Lista de tarefas</h1>

      <input type="text" placeholder='Digite o nome da tarefa...'
        value={input}
        onChange={(e) => setInput(e.target.value)} />

      <button onClick={handleRegister}> Adicionar tarefa </button>
      <hr />

      {tasks.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
        </section>
      ))}
    </div>
  )
}
