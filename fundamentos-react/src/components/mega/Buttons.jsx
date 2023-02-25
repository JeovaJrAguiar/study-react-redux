import React from "react";

export default props => {
    const ifChange = props.ifChange
    const sizeNumber = props.sizeNumber

    return (
        <div>
            <button onClick={ifChange(sizeNumber)}>Gerar</button>
        </div>
    )
}