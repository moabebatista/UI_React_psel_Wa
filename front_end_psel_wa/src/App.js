import './App.css';
import { useEffect, useState } from 'react';
import Tabela from './componentes/Tabela';
import Header from './componentes/Header';
import InputPesquisar from './componentes/InputPesquisar';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleAlunos()
  }, [])

  async function handleAlunos() {
    try {
      const response = await fetch('http://localhost:3333/alunos', {
      method: 'GET'
      });

    const data = await response.json();
    setLoading(false);
    setAlunos(data);

    } catch (error) {
      return alert(error);
    }
  }
  
  return (
    <div className="App">
      <Header />
      <InputPesquisar />
      {loading ? 
        <div className="c-loader"></div>
        :
        <Tabela 
        alunos={alunos}
        />
      }
    </div>
  );
}

export default App;
