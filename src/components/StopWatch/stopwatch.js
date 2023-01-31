import React from 'react';
import { useReducer } from 'react';
let initialState = { 
    timer: 0 ,
    isStarted:false,
}
export const Stopwatch = () => {
    const [state, dispatch] = useReducer(stopWatchReducer, initialState);
    function stopWatchReducer(state, action) {
        if(action.type==="start"){
            state.isStarted=true;
            console.log(state.isStarted);
        }
      return state;
    }
    return (
        <>
            <div>{state.timer}</div>
            <button disabled={state.isStarted} onClick={()=> {dispatch({ type: "start" })}}>Start</button>
            <button onClick={()=> {dispatch({ type: "stop" })}}>Stop</button>
            <button onClick={()=> {dispatch({ type: "reset" })}}>Reset</button>
        </>
    )
}