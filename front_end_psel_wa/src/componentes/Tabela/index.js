import React from 'react';
import './styles.css'
import { formataCpf } from '../../utils/functionsUtils';

function Tabela({alunos}) {
    return (
        <div className="tabela-alunos">
            <thead className="header-tabela-alunos">
                <tr className="aluno-resume-tr">
                    <th 
                        className="aluno-resume-th"
                    >
                        Nome
                    </th>
                    <th 
                        className="aluno-resume-th"
                    >
                        CPF
                    </th>
                    <th 
                        className="aluno-resume-th"
                    >
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
    )
}

export default Tabela;