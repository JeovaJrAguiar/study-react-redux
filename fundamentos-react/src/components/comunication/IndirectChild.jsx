import React from "react";

 export default props => {
    const cb = props.quandoClicar

    const min = 30
    const max = 60
    const generateOld = () => parseInt(Math.random() * ( max - min ) + min)
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={ _ => cb('Joao Octavio', generateOld(), true)}> 
                fornecer informacoes
            </button>
        </div>
    )
 } 