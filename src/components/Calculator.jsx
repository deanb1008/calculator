import React, { useState } from 'react';
import { CalculatorButtons } from './CalculatorButtons';
import { CalculatorDisplay } from './CalculatorDisplay';
//import { useState } from 'react';

import * as math from 'mathjs';

export const Calculator = () => {

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value => {
            if(value === '=') {
                const newResult = math.evaluate(input);
                setResult(newResult.toString() );
            }
            else if(value === 'C') {
                setResult("");
                setInput("");
            }
            else if(value === 'Del') {
                setInput( (previousInput) => previousInput.slice(0, -1) );
                }
            else {
                setInput( (previousInput) => previousInput + value);
            }
    });
    

    return (
        <div>
         <h1>My Calculator</h1>
         <CalculatorDisplay input = {input} result = {result} /> 
            <div className = 'buttons'>
                <div className = 'calc-row'>
                    {
                        ['7', '8', '9', '/'].map( (value) => {
                            return (
                                <CalculatorButtons value = {value} onClick = {handleClick} /> //JSX Attributes
                            );
                        }
                    )
                }
                </div>
                <div className = 'calc-row'>
                    {
                        ['4', '5', '6', '*'].map( (value) => {
                            return (
                                <CalculatorButtons value = {value} onClick = {handleClick} /> //JSX Attributes
                            );
                        }
                    )
                }
                </div>
                <div className = 'calc-row'>
                    {
                        ['1', '2', '3', '-'].map( (value) => {
                            return (
                                <CalculatorButtons value = {value} onClick = {handleClick} /> //JSX Attributes
                            );
                        }
                    )
                }
                </div>
                <div className = 'calc-row'>
                    {
                        ['0', '.', '=', '+'].map( (value) => {
                            return (
                                <CalculatorButtons value = {value} onClick = {handleClick} /> //JSX Attributes
                            );
                        }
                    )
                }
                </div>
                <div className = 'calc-row'>
                    {
                        ['Del', 'C'].map( (value) => {
                            return (
                                <CalculatorButtons value = {value} onClick = {handleClick} /> //JSX Attributes
                            );
                        }
                    )
                }
                </div>
            </div>           
         </div>
    );
}