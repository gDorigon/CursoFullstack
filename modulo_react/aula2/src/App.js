import React, { useEffect, useState } from "react";
import './style.css'

// Componente principal da aplicação
function App() {
  // Estado para armazenar os dados da API
  const [nutri, setNutri] = useState([]);

  // useEffect executa a função de carregamento da API assim que o componente é montado
  useEffect(() => {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      
      // Fazendo uma requisição HTTP para buscar os dados da API
      fetch(url)
        .then((r) => r.json()) // Converte a resposta para JSON
        .then((json) => {
          console.log(json); // Exibe os dados no console para depuração
          setNutri(json); // Atualiza o estado com os dados da API
        })
        .catch((error) => console.error("Erro ao buscar os dados:", error)); // Captura erros na requisição
    }

    loadApi(); // Chama a função ao montar o componente
  }, []); // Array de dependências vazio para garantir que execute apenas uma vez

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {/* Mapeia os dados da API e cria um artigo para cada item */}
      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            
            {/* Exibe a imagem do item */}
            <img src={item.capa} alt={item.titulo} className="capa" />

            {/* Exibe o subtítulo do item */}
            <p className="subtitulo">{item.subtitulo}</p>

            {/* Botão de acesso (não possui funcionalidade definida) */}
            <a className="botao"> Acessar </a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
