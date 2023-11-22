import React from "react";

export const CalculatorDisplay = ({input, result}) => {
    return (
         <div>
            <input type = "text" value = {input} readOnly />
            <div>{result}</div>
         </div>            
    );
}