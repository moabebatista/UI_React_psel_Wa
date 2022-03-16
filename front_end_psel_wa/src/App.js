import { useEffect, useState } from 'react';
import './App.css';
import alertError from './assets/alert.svg';
import Header from './componentes/Header';
import InputPesquisar from './componentes/InputPesquisar';
import Tabela from './componentes/Tabela';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pesquisar, setPesquisar] = useState(false);
  const [errorPesquisa, setErrorPesquisa] = useState(false);

  useEffect(() => {
    handleAlunos();
  },[])

  useEffect(() => {
    if(errorPesquisa) {
      const timeout = setTimeout(() => {
        window.location.reload();
      }, 3500);

      return () => {
        clearTimeout(timeout);
      }   
    }
  },[errorPesquisa])

  async function handleAlunos() {
    try {
      const response = await fetch(`http://localhost:3333/alunos`, {
        method: 'GET'
      });

    const data = await response.json();
    setLoading(false);
    console.log(data);
    setAlunos(data);

    } catch (error) {
      return alert(error);
    }
  }

  function fecharAlert() {
    setErrorPesquisa(false);
    window.location.reload();
  }
  
  return (
    <div className="App">
      <Header />
      <InputPesquisar 
        setAlunos={setAlunos}
        setLoading={setLoading}
        pesquisar={pesquisar}
        setPesquisar={setPesquisar}
        setErrorPesquisa={setErrorPesquisa}
      />
      {errorPesquisa &&  
          <div 
            className="card-error-pesquisa"
            onClick={() => fecharAlert()}
          >
            <img src={alertError} alt="error" />
      </div>}
      {loading && 
        <div className='loading'>
          <div className="c-loader"></div>
          <span>Loading...</span>
        </div>
      }
      { !errorPesquisa &&
         <Tabela 
         alunos={alunos}
       />
      }
    </div>
  );
}

export default App;
