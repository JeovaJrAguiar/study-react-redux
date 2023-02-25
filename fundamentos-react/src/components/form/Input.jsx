import React, { useState} from "react";
import './Input.css'

export default props => {
    const [ valor, setValor] = useState('Inicializado')
    function quandoMudar(e){
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div>
                <input value={valor} onChange={quandoMudar}></input>    
                <input value={valor} readOnly></input>    
                <input value={undefined}></input>    
            </div>
            
        </div>
    )
}