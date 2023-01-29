import { useReducer } from 'react';

const initialState = {
    displayValue: '',
    operator: null,
    firstValue: null,
    secondValue: false
};

const calculatorReducer = (state, action) => {
    switch (action.type) {
        case 'AC':
            return initialState;
        case 'NUMBER':
            return {
                ...state,
                displayValue: state.waitingForSecondOperand ?
                    state.secondValue === false ? action.payload : state.secondValue + action.payload
                    : state.displayValue === '0' ? action.payload : state.displayValue + action.payload,
                secondValue: state.waitingForSecondOperand ?
                    state.secondValue === false ? action.payload : state.secondValue + action.payload
                    : false
            };

        case 'OPERATOR':
            return { ...state, operator: action.payload, firstValue: state.displayValue, waitingForSecondOperand: true };

        case 'CALCULATE':
            let result;
            const firstValue = parseFloat(state.firstValue);
            const secondValue = parseFloat(state.displayValue);
            switch (state.operator) {
                case '+':
                    result = firstValue + secondValue;
                    break;
                case '-':
                    result = firstValue - secondValue;
                    break;
                case '*':
                    result = firstValue * secondValue;
                    break;
                case '/':
                    result = firstValue / secondValue;
                    break;
                default:
                    return state;
            }
            return { ...state, displayValue: result.toString(), firstValue: null, operator: null, waitingForSecondOperand: false };
        default:
            return state;
    }
};

const Calculator = () => {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);
    const handleClick = (e) => {
        const value = e.target.innerText;
        switch (value) {
            case 'AC':
                dispatch({ type: 'AC' });
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                dispatch({ type: 'OPERATOR', payload: value });
                break;
            case '=':
                dispatch({ type: 'CALCULATE' });
                break;
            default:
                dispatch({ type: 'NUMBER', payload: value });
        }
    }

    return (
        <div>
            <div>{state.firstValue}  {state.operator} {state.secondValue} </div>
            <div>Result:{state.displayValue}</div>
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
export default Calculator;