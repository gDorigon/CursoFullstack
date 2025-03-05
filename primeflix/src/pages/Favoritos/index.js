import { useEffect, useState } from 'react'; // Importa os hooks useEffect e useState do React para gerenciar o estado e efeitos colaterais.
import './favoritos.css'; // Importa o arquivo de estilo CSS para o componente Favoritos.
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router, para navegação entre páginas.
import { toast } from 'react-toastify'; // Importa o toast para mostrar notificações na tela.

function Favoritos() {
  // Cria o estado para armazenar a lista de filmes salvos.
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    // Quando o componente é montado, carrega a lista de filmes salvos no localStorage.
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []); // Se não houver filmes salvos, cria uma lista vazia.
  }, []); // O efeito só é executado uma vez, quando o componente for montado.

  function excluirFlime(id) {
    // Filtra a lista de filmes, removendo o filme com o ID fornecido.
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id; // Retorna todos os filmes, exceto o que foi excluído.
    });

    // Atualiza o estado de filmes com a lista filtrada e também atualiza o localStorage.
    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso"); // Exibe uma mensagem de sucesso.
  }

  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      {/* Se não houver filmes salvos, exibe uma mensagem informando isso */}
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

      <ul>
        {/* Mapeia os filmes salvos e exibe cada um na lista */}
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span> {/* Exibe o título do filme */}

              <div>
                {/* Link para visualizar os detalhes do filme */}
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                {/* Botão para excluir o filme da lista */}
                <button onClick={() => excluirFlime(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos; // Exporta o componente Favoritos para ser usado em outros lugares do projeto.
