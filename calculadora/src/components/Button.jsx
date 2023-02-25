import React from "react";
import "./Button.css"

export default props => 
    <button 
    className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'operation' : ''}
        ${props.triple ? 'operation' : ''}
    `}>
        {props.label}
    </button>