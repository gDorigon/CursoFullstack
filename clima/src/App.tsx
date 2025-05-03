import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [dadosClima, setDadosClima] = useState<any>(null);

  function handleBuscarCidade(cidade: string) {
    const apiKey = 'd9b86d73fea820529335083254eb6fa4';
    const countryCode = 'BR';

    async function getWeather() {
      const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
      const url = `${baseUrl}?q=${cidade},${countryCode}&appid=${apiKey}&units=metric&lang=pt`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erro: ${response.statusText}`);
        }

        const data = await response.json();
        setDadosClima(data);
      } catch (error) {
        alert("Cidade não encontrada.");
        setDadosClima(null);
      }
    }

    getWeather();
  }

  return (
    <div>
      <h1>App ClimaTempo</h1>

      <input
        type="text"
        placeholder="Insira a cidade que deseja buscar"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => handleBuscarCidade(input)}>Buscar</button>

      {dadosClima && (
        <div>
          <h2>{dadosClima.name}</h2>
          <p>{dadosClima.main.temp}°C</p>
          <p>{dadosClima.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
