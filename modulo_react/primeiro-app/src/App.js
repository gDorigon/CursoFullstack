import Nome from './components/Nome'

function App(){
  return(
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Guilherme" idade={30} />
      <br/>
      <Nome aluno="Eduardo" idade={33}/>
    </div>
  );
}

export default App;
