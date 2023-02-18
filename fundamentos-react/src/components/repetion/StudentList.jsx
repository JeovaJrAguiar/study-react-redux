import React from "react";
import alunos from '../../data/students'

export default props => {
    const lis =  alunos.map((aluno) => {
        return (
                <li key={aluno.id}>
                    {aluno.id} - {aluno.name} {aluno.note}
                </li>
            )
    });

    return (
        <div>
            <ul style={{listStyle : 'none'}}>
                {lis}
            </ul>
        </div>
    )
}