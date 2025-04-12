import { useState, useEffect, useRef } from 'react'


export default function App() {

  const inputRef = useRef<HTMLInputElement>(null)
  const firstRender = useRef(true)


  const [tasks, setTesks] = useState<string[]>([])

  const [editTask, setEditTask] = useState({
    enabled: false,
    task: '',
  });


  useEffect(() => {

    const tarefasSalvas = localStorage.getItem("@cursoreact")

    if (tarefasSalvas) {
      setTesks(JSON.parse(tarefasSalvas));
    }
  }, [])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem("@cursoreact", JSON.stringify(tasks))

  }, [tasks])




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

    inputRef.current?.focus();

    inputRef.current?.focus();
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
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef} />

      <button onClick={handleRegister}> {editTask.enabled ? "Atualizar Tarefa" : "Adicionar Tarefa"} </button>
      <hr />

      {tasks.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelet(item)}>Excluir</button>
          <br />

        </section>
      ))}
    </div>
  )
}
