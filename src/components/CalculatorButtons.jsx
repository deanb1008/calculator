import React from "react";

export const CalculatorButtons = ({value, onClick}) => {

    return(
        <button onClick = { () => onClick(value)}>{value}</button>
    );
}