import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {

  return (
    <div className='container'>
      <img src={logoImg} alt="logo" className='logo' />

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>

        <button className='category-button'>Motivaçãoa</button>

        <button className='category-button'>Bem estar</button>

      </section>

      <button className='button-frase'>Gerar frase</button>

      <p className='texto-frase'>Alguma frase vai vir aqui</p>
    </ div>
  )
}

export default App
