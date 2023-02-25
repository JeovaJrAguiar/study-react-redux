import React, { useState } from "react";

export default props => {

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numeroIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numeroIniciais)

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min

        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
    }

    return (
        <div>
            <h3>Numbers for Megacena</h3>
            <h4>{numeros.join(' ')}</h4>

            <div>
                <label>Mount numbers:</label>
                <input type='number' value={qtde} onChange={e => setQtde(+e.target.value)}/>
            </div>

            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>generate</button>

        </div>
    )
}