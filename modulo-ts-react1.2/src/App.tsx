import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'





function App() {

  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)


  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento',
        'Deixe de lado as preocupações e seja feliz',
        'Frase motivação 333'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'bom dia 1',
        'bom dia 253',
        'bom dia 12312',
        'bom dia 443'

      ]
    },
    {
      id: 3,
      nome: "Boa Noite",
      frases: [
        'bom Noite 1',
        'bom Noite 253',
        'bom Noite 12312',
        'bom Noite 443'

      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className='container'>
      <img src={logoImg} alt="logo" className='logo' />

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>

        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className='category-button'
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 3 : 0,
              borderColor: "#1fa4db"
            }}

            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}

      </section>

      <button className='button-frase' onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && <p className='texto-frase'>{textoFrase}</p>}

    </ div>
  )
}

export default App
