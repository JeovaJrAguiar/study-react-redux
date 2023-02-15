import React from "react";

export default props => {
    const { min, max} = props;
    const num = parseInt(Math.random()*(max-min)) + min
    
    return (
        <>
            The random number is: {num}
        </>    
    )
};