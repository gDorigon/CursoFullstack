import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
      
    </div>
  );
}

export default App;
