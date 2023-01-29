import React, { useState } from 'react';
const CalculatorUsingUseState = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleClick = (e) => {
    const value = e.target.innerText;
    switch (value) {
      case 'AC':
        setDisplayValue('0');
        setOperator("");
        setFirstValue("");
        setSecondValue("");
        setWaitingForSecondOperand(false);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        setOperator(value);
        setFirstValue(displayValue);
        setWaitingForSecondOperand(true);
        break;
      case '=':
        let result;
        const first = parseInt(firstValue);
        const second = parseInt(secondValue);
        switch (operator) {
          case '+':
            result = first + second;
            break;
          case '-':
            result = first - second;
            break;
          case '*':
            result = first * second;
            break;
          case '/':
            result = first / second;
            break;
          default:
            return;
        }
        setDisplayValue(result.toString());
        setOperator(null);
        setFirstValue("");
        setSecondValue("");
        setWaitingForSecondOperand(false);
        break;
      default:
        if (waitingForSecondOperand) {
          setSecondValue(secondValue + value);
        } else {
          setDisplayValue(displayValue === '0' ? value : displayValue + value);
        }
    }
  }


    return (
        <div>
            <div>{firstValue}  {operator} {secondValue} </div>
            <div>Result:{displayValue}</div>
            <div>
                <div>
                <button onClick={handleClick}>1</button>
                <button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button>
                <button onClick={handleClick}>AC</button>
                </div>
                <div>
                <button onClick={handleClick}>4</button>
                <button onClick={handleClick}>5</button>
                <button onClick={handleClick}>6</button>
                <button onClick={handleClick}>+</button>
                </div>
                <div>
                <button onClick={handleClick}>7</button>
                <button onClick={handleClick}>8</button>
                <button onClick={handleClick}>9</button>
                <button onClick={handleClick}>-</button>
                </div>
                <div>
                <button onClick={handleClick}>0</button>
                <button onClick={handleClick}>*</button>
                <button onClick={handleClick}>/</button>
                <button onClick={handleClick}>=</button>
               </div>            
            </div>
        </div>
    );
}
export default CalculatorUsingUseState;