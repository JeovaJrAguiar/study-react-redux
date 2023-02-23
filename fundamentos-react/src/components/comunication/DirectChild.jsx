import React from "react";

 export default props => {
    return (
        <div>
            <span>{props.name}</span>
            <span><strong>{props.old}</strong></span>
            <span>{props.nerd ? 'True' : 'False'} !</span>
        </div>
    )
 }