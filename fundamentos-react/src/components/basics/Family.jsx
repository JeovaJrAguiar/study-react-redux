import React, { cloneElement } from "react";

export default props => {
    return (
        <div>
            {cloneElement(props.children, {...props})}
        </div>
    )
}