import React, { useState } from "react";
import IndirectChild from "./IndirectChild"

 export default _ => {
    const [ name, setName ] = useState('?')
    const [ old, setOld ] = useState(0)
    const [ nerd, setNerd ] = useState(false)

    function fornecerInformacoes(nameParam, oldParam, nerdParam){
        setName(nameParam)
        setOld(oldParam)
        setNerd(nerdParam)
        console.log(name, old, nerd)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong >{old}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndirectChild quandoClicar={fornecerInformacoes}/>
        </div>
    )
 }