import RoutesApp from "./routes"; // Importa o componente que gerencia as rotas do aplicativo.
import { ToastContainer } from "react-toastify"; // Importa o container responsável por exibir notificações (toasts).

function App() {
  return (
    <div className="App">
      {/* Componente responsável por exibir notificações na tela. 
          O `autoClose={1000}` faz com que a notificação desapareça automaticamente após 1 segundo. */}
      <ToastContainer autoClose={1000}/>

      {/* Componente que renderiza as rotas do aplicativo, definindo qual página será exibida */}
      <RoutesApp/>
    </div>
  );
}

export default App; // Exporta o componente App para ser usado em outro lugar do projeto.
