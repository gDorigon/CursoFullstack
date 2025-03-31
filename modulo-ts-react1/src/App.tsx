import { Header } from './components/header'
import { Aluno } from './components/aluno'
import { Footer } from './components/footer'


export default function App() {
  return (
    <div>
      <Header title='Dorigoat do React' />
      <Aluno nome="Leticya" idade={20} />

      <Aluno nome="Guilherme" idade={21} />

      <Aluno nome="Dorigon" idade={30} />

      <Footer />
    </div>

  )
}

