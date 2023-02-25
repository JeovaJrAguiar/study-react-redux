import React, { useState } from "react";
import Buttons from "./Buttons";

export default _ => {
    const [ counterValue, setCounterValue ] = useState(0)

    function incCounterValue (){ setCounterValue(counterValue + 1) }
    function decCounterValue (){ setCounterValue(counterValue - 1) }

    return (
        <div>
            <h2>Contador</h2>
            <h3>{counterValue}</h3>
            
            <Buttons incCounter={incCounterValue} decCounter={decCounterValue}/>  
        </div>

    )
}