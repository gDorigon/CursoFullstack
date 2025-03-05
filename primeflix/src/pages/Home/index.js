import { useEffect, useState } from 'react'; // Importa os hooks useEffect e useState do React para gerenciar o estado e efeitos colaterais.
import api from '../../services/api'; // Importa a configuração da API para fazer requisições.
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router, para navegação entre páginas.
import './home.css'; // Importa o arquivo de estilo CSS para o componente Home.

function Home() {
  // Cria o estado para armazenar os filmes e o estado para controlar o carregamento da página.
  const [filmes, setFilmes] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Função assíncrona para carregar os filmes da API.
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "d9fd0086812f610837729c617ee89806", // Chave da API para autenticação.
          language: "pt-BR", // Define o idioma para português do Brasil.
          page: 1, // Pega a primeira página dos resultados.
        }
      });

      // Atualiza o estado com os filmes recebidos, pegando os 10 primeiros filmes da lista.
      setFilmes(response.data.results.slice(0, 20)); 
      setLoading(false); // Atualiza o estado de carregamento para false, indicando que os filmes foram carregados.
    }

    loadFilmes(); // Chama a função para carregar os filmes assim que o componente for renderizado.

  }, []); // O array vazio [] significa que o efeito só vai rodar uma vez, quando o componente for montado.

  // Se o estado de loading for verdadeiro, exibe uma mensagem informando que os filmes estão sendo carregados.
  if (loading === true) {
    return (
      <div className='loading'>
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  // Exibe a lista de filmes carregados na tela.
  return (
    <div className="container">
      <div className='lista-filmes'>
        {filmes.map((filme) => { // Mapeia a lista de filmes e renderiza um artigo para cada um.
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong> {/* Exibe o título do filme */}
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} /> {/* Exibe a imagem do poster do filme */}
              <Link to={`/filme/${filme.id}`}>Acessar</Link> {/* Link para a página de detalhes do filme */}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home; // Exporta o componente Home para ser usado em outros lugares do projeto.
