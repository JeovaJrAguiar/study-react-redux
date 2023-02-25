import React from "react"
import "./Buttons.css"

export default props => {
    const incCounter = props.incCounter
    const decCounter = props.decCounter

    return (
        <div>
            <button onClick={_ => decCounter()}>-</button>
            <button onClick={_ => incCounter()}>+</button>
        </div>
    )
}