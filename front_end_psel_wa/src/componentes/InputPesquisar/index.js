import React, { useEffect, useState } from 'react';
import './styles.css';

function InputPesquisar({setAlunos, setLoading, pesquisar, setPesquisar, setErrorPesquisa}) {

    const [alunoPesquisado, setAlunoPesquisado] = useState("");
    
    useEffect(() => { 
        handlePesquisa();    
    },[pesquisar]);

    async function handlePesquisa() {
        try {
            const response = await fetch(`http://localhost:3333/alunos/${alunoPesquisado}`, {
            method: 'GET'
            });
      
          const data = await response.json();

          if(data === "Aluno não encontrado!") {
                setErrorPesquisa(true);
                return;
          }
          
            setLoading(false);
            setPesquisar(false);
            setAlunoPesquisado('');
            setAlunos(data);
          } catch (error) {
            return alert(error);
          }
    }

    return (
        <div 
            className="filtrar-alunos"
        >
            <input 
                className="buscar"
                placeholder="digite o nome, cpf ou email que deseja pesquisar."
                type="text"
                value={alunoPesquisado}
                onChange={(e) => setAlunoPesquisado(e.target.value)} 
            />
            <button onClick={() => setPesquisar(true)}>
                Pesquisar
            </button>
        </div>
    )
}

export default InputPesquisar;