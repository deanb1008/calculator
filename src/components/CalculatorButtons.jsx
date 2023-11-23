import React from "react";

export const CalculatorButtons = ({value, onClick}) => {

    return(
        <button onClick = { () => onClick(value)}>{value}</button>
    );
}


{/* The React onClick event handler enables you to call a function 
and trigger an action when a user clicks an element, 
such as a button, in your app.  */}