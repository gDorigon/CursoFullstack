import { useEffect, useState } from 'react'; // Importa os hooks useEffect e useState do React para gerenciar o estado e efeitos colaterais.
import { useParams, useNavigate } from 'react-router-dom'; // Importa os hooks useParams (para acessar parâmetros da URL) e useNavigate (para navegação entre páginas).
import api from '../../services/api'; // Importa a configuração da API para fazer requisições.
import './filme-info.css'; // Importa o arquivo de estilo CSS para o componente Filme.
import { toast } from 'react-toastify'; // Importa o toast para mostrar notificações na tela.

function Filme() {
  // Obtém o ID do filme da URL usando o hook useParams.
  const { id } = useParams();

  // Inicializa o hook useNavigate para navegação entre páginas.
  const navigate = useNavigate();

  // Cria o estado para armazenar os dados do filme e o estado de carregamento.
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função assíncrona para carregar os detalhes do filme a partir da API.
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "d9fd0086812f610837729c617ee89806", // Chave da API para autenticação.
          language: "pt-BR", // Define o idioma para português do Brasil.
        }
      })
      .then((response) => {
        // Se a requisição for bem-sucedida, atualiza o estado com os dados do filme.
        setFilme(response.data);
        setLoading(false); // Atualiza o estado de carregamento para false.
      })
      .catch(() => {
        // Se ocorrer um erro (filme não encontrado), exibe uma mensagem de erro e redireciona para a página principal.
        console.log("FILME NÃO ENCONTRADO");
        navigate("/", { replace: true });
        return;
      });
    }

    loadFilme(); // Chama a função para carregar os detalhes do filme.

    return () => {
      console.log("COMPONENTE DESMONTADO"); // Função de limpeza, chamada quando o componente for desmontado.
    };
  }, [navigate, id]); // O efeito é executado sempre que o 'id' ou 'navigate' mudar.

  function salvarFilme() {
    // Obtém a lista de filmes salvos do localStorage.
    const minhaLista = localStorage.getItem("@primeflix");
    let filmesSalvos = JSON.parse(minhaLista) || []; // Se não houver filmes, cria uma lista vazia.

    // Verifica se o filme já está na lista de filmes salvos.
    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

    if (hasFilme) {
      // Se o filme já estiver salvo, exibe uma mensagem de alerta.
      toast.warn("Filme já está na lista");
      return;
    }

    // Adiciona o filme à lista de filmes salvos e atualiza o localStorage.
    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso"); // Exibe uma mensagem de sucesso.
  }

  // Se o estado de loading for verdadeiro, exibe uma mensagem informando que os detalhes do filme estão sendo carregados.
  if (loading) {
    return (
      <div className='filme-info'>
        <h1>Carregando detalhes do filme...</h1>
      </div>
    );
  }

  // Exibe os detalhes do filme após o carregamento.
  return (
    <div className='filme-info'>
      <h1>{filme.title}</h1> {/* Exibe o título do filme */}
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} /> {/* Exibe a imagem de fundo do filme */}

      <h3>Sinopse</h3>
      <span>{filme.overview}</span> {/* Exibe a sinopse do filme */}

      <strong>Avaliação: {filme.vote_average}/10</strong> {/* Exibe a avaliação do filme */}

      <div className='area-buttons'>
        <button onClick={salvarFilme}>Salvar</button> {/* Botão para salvar o filme na lista */}

        <button>
          <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title}`}>
            Trailer
          </a> {/* Link para buscar o trailer do filme no YouTube */}
        </button>
      </div>
    </div>
  );
}

export default Filme; // Exporta o componente Filme para ser usado em outros lugares do projeto.
