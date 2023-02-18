import React from "react";

export default props => {
    console.log(props)
    return (
        <div> 
            {props.name} <strong>{props.lastname}</strong>
        </div>
    )
}
