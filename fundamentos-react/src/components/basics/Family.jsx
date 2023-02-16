import React, { cloneElement } from "react";

export default (props) => {
    console.log(props)
    return (
        <div>
            {
                React.Children.map(props.Children, (child, i )=> {
                    return cloneElement(child, {...props, key: i})
                })
            } 
        </div>
    );
};