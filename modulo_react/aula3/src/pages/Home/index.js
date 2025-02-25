import {Link} from 'react-router-dom'


function Home() {
    return (
      <div>
        <h1>Bem vindo a página home</h1>
        <span> Sujeito Programador</span>
        <br/><br/>
        <Link to="/sobre"> Sobre </Link>
        <br/>
        <Link to="/contato"> CONTATO </Link>
      </div>
    );
  }
  
  export default Home;
  