import { useState, FormEvent } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;

}

function App() {

  const [gasolinaInput, setGasolinaInput] = useState(1.00)
  const [etanolInput, setEtanolInput] = useState(1.00)
  const [info, setInfo] = useState<InfoProps>()

  function calcular(event: FormEvent) {
    event.preventDefault();

    let calculo = (etanolInput / gasolinaInput)

    if (calculo <= 0.7) {
      setInfo({
        title: 'compensa usar álcool',
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(etanolInput),
      })
    } else {
      setInfo({
        title: 'compensa usar gasolina',
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(etanolInput),
      })
    }
  }


  function formatarMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString('pt-br',
      {
        style: 'currency',
        currency: 'BRL'

      })

    return valorFormatado;
  }

  return (
    <div>
      <main className='container'>

        <img
          className='logo'
          src={logoImg}
          alt='Logo da calculadora'

        />
        <h1>Qual melhor opção?</h1>

        <form className='form' onSubmit={calcular}>
          <label>Álcool ( preço por litro ): </label>
          <input
            className='input'
            type='number'
            placeholder='1,00'
            min='1'
            step='0.01'
            required
            value={etanolInput}
            onChange={(e) => setEtanolInput(Number(e.target.value))}
          />

          <label>Gasolina ( preço por litro ): </label>
          <input
            className='input'
            type='number'
            placeholder='1,00'
            min='1'
            step='0.01'
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input type='submit' className='button' value='Calcular' />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>{info.title}</h2>

            <span>Alcool {info.alcool}</span>
            <span> Gasolina {info.gasolina}</span>
          </section>
        )}
      </main>
    </div>
  )
}

export default App 
