import React from 'react';
import './styles.css';

function InputPesquisar() {
    return (
        <form className="filtrar-alunos">
            <input 
                className="buscar"
                placeholder="digite o nome, cpf ou email que deseja pesquisar."
                type="text" 
            />
            <button>
            Pesquisar
            </button>
      </form>
    )
}

export default InputPesquisar;