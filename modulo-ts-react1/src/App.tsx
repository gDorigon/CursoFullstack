export default function App(){
  return(
    <div>
      <h1> Meu projeto </h1>
      <Aluno nome="Leticya" idade={20}/>

      <Aluno nome="Guilherme" idade={21}/>

      <Aluno nome="Dorigon" idade={30}/>
    </div>

  )
}

interface AlunoProps{
  nome: string;
  idade: number;
}

function Aluno({nome, idade} : AlunoProps){
  return(
    <div>
      <h1> Aluno(a): {nome}</h1>
      <h3> Idade: {idade}</h3>
    </div>
  )
}