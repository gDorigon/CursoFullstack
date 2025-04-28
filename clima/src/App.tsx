import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("")

  function handleBuscarCidade(cidade: string) {

    const apiKey = 'd9b86d73fea820529335083254eb6fa4'; // Substitua pela sua chave de API
    // Definindo o código do país para refinar a busca
    const countryCode = 'BR';

    // Função assíncrona para obter os dados do clima da API
    async function getWeather() {
      // Construindo a URL da API com os parâmetros necessários
      const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
      const url = `${baseUrl}?q=${cidade},${countryCode}&appid=${apiKey}&units=metric&lang=pt`;

      try {
        // Fazendo uma requisição à API usando fetch
        const response = await fetch(url);

        // Verificando se a resposta não foi bem-sucedida
        if (!response.ok) {
          // Lançando um erro com a mensagem da resposta
          throw new Error(`Erro: ${response.statusText}`);
        }

        // Convertendo a resposta em JSON
        const data = await response.json();

        // Atualizando as informações do clima na págin
      } catch (error) {
        alert("ERRO")
      }
    }

  }


  return (
    <div>
      <h1>App ClimaTempo</h1>

      <input type="text"
        placeholder='Insira a cidade que deseja buscar'
        value={input}
        onChange={(e) => { setInput(e.target.value) }} />

      <button onClick={() => handleBuscarCidade(input)}>Buscar</button>

    </div>
  )
}

export default App
