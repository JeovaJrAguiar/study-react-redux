import React, { cloneElement , Children} from "react";

export default (props) => {
    return (
        <div>
            Aula 26 e 27
            {
                cloneElement(props.children, props)
                /*props.Children.map((child, i )=> {
                    cloneElement(child, {...props, key: i})
                })*/
            }
        </div>
    );
};