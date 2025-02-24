// Importa o hook useState do React, que permite adicionar estados ao componente.
import { useState, useEffect } from 'react';

function App() {
  // Define um estado 'input' que armazenará o texto digitado pelo usuário no campo de entrada.
  // Inicialmente, ele começa como uma string vazia ('').
  const [input, setInput] = useState('');

  // Define um estado 'tarefas', que armazenará a lista de tarefas.
  // Inicialmente, ele contém duas tarefas predefinidas.
  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar ReactJS'
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas])

  // Função chamada quando o usuário tenta adicionar uma nova tarefa.
  function handleRegister(e) {
    // Previne o recarregamento da página ao enviar o formulário.
    e.preventDefault();

    // Atualiza a lista de tarefas adicionando a nova tarefa digitada pelo usuário.
    setTarefas([...tarefas, input]);

    // Limpa o campo de entrada após a adição da nova tarefa.
    setInput('');
  }

  return (
    <div>
      {/* Título da seção */}
      <h1> Nome da tarefa: </h1>

      {/* Formulário onde o usuário digita uma nova tarefa e a adiciona à lista */}
      <form onSubmit={handleRegister}>
        {/* Rótulo do campo de entrada */}
        <label> Nome</label><br />

        {/* Campo de entrada onde o usuário digita a tarefa */}
        <input
          placeholder='Digite uma tarefa' // Texto de exemplo dentro do campo
          value={input} // O valor do campo de entrada está vinculado ao estado 'input'
          onChange={(e) => setInput(e.target.value)} // Atualiza o estado 'input' conforme o usuário digita
        /> <br />

        {/* Botão para adicionar a tarefa */}
        <button type='submit'>Registrar</button>
      </form>

      <br /><br />

      {/* Lista de tarefas exibida na tela */}
      <ul>
        {/* Percorre a lista de tarefas e cria um item <li> para cada uma */}
        {tarefas.map(tarefa => (
          <li key={tarefa}>
            {tarefa} {/* Exibe o nome da tarefa */}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exporta o componente App para que ele possa ser usado em outros arquivos.
export default App;
