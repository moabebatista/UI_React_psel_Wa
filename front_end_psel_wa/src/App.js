import './App.css';
import { useEffect, useState } from 'react';

function formataCpf (cpf) {
  let cpfFormatdo = 
  `${cpf.slice(0, 3)}.
  ${cpf.slice(3, 6)}.
  ${cpf.slice(6, 9)}-
  ${cpf.slice(9, 11)}`
  return cpfFormatdo; 
}

function App() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    handleAlunos()
  }, [])

  async function handleAlunos() {
    try {
      const response = await fetch('http://localhost:3333/alunos', {
      method: 'GET'
      });

    const data = await response.json();
    setAlunos(data);

    } catch (error) {
      return alert(error);
    }
  }
  
  return (
    <div className="App">
      <header className="cabecalho">
        <span className="gradient">
          Psel Wa
        </span>
      </header>
      <div className="filtrar-alunos">
        <input 
          className="buscar"
          placeholder="digite o nome, cpf ou email que deseja pesquisar."
          type="text" 
        />
        <button>
          Pesquisar
        </button>
      </div>

     <div className="tabela-alunos">
     <thead className="header-tabela-alunos">
        <tr className="aluno-resume-tr">
          <th 
            className="aluno-resume-th">
              Nome
          </th>
          <th 
            className="aluno-resume-th">
              CPF
          </th>
          <th 
            className="aluno-resume-th">
              Email
          </th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((aluno) => (
          <tr 
            className="aluno-resume-line-tr"
            key={aluno.id} 
          >
            <td
              className="aluno-resume-line-td"
            >
              {aluno.nome}
            </td>
            <td
              className="aluno-resume-line-td"
            >
              {formataCpf(aluno.cpf)}
            </td>
            <td
              className="aluno-resume-line-td"
            >
              {aluno.email}
            </td>
          </tr>
        ))}
      </tbody>
     </div>
      
    </div>
  );
}

export default App;
