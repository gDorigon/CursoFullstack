import { useState } from 'react'


export default function App() {
  const [tasks, setTesks] = useState<string[]>([])

  const [editTask, setEditTask] = useState({
    enabled: false,
    task: '',
  })

  function handleRegister() {
    if (!input) {
      alert("Preencha o nome da tarefa")
    }

    if (editTask.enabled) {
      handleSaveEdit();
      return;
    }

    setTesks(tarefas => [...tarefas, input])
    setInput("")
  }

  function handleSaveEdit() {
    const findIndexTask = tasks.findIndex(task => task === editTask.task)
    const allTasks = [...tasks];

    allTasks[findIndexTask] = input;
    setTesks(allTasks)

    setEditTask({
      enabled: false,
      task: ''
    })

    setInput('')
  }

  function handleDelet(item: string) {
    const removeTask = tasks.filter(task => task !== item)
    setTesks(removeTask)
  }



  function handleEdit(item: string) {
    setInput(item)
    setEditTask({
      enabled: true,
      task: item
    })
  }

  const [input, setInput] = useState("")
  return (
    <div>
      <h1> Lista de tarefas</h1>

      <input type="text" placeholder='Digite o nome da tarefa...'
        value={input}
        onChange={(e) => setInput(e.target.value)} />

      <button onClick={handleRegister}> {editTask.enabled ? "Atualizar Tarefa" : "Adicionar Tarefa"} </button>
      <hr />

      {tasks.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelet(item)}>Excluir</button>
        </section>
      ))}
    </div>
  )
}
