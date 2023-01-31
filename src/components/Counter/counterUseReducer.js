import React from 'react'
import { useReducer } from 'react';
let initialCount = 0;
function counterReducer(count, action) {
   if(action.type==="inc"){
    return count+1;
   }
   if(action.type==="dec"){
    return count-1;
   }
   if(action.type==="res"){
    return initialCount;
   }
}
export const CounterUsingReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, initialCount);
    return (
        <>
            <div>{state}</div>
            <button onClick={()=> {dispatch({ type: "inc" })}}>Increment</button>
            <button onClick={()=> {dispatch({ type: "dec" })}}>Decrement</button>
            <button onClick={()=> {dispatch({ type: "res" })}}>Reset</button>
        </>
    )
}