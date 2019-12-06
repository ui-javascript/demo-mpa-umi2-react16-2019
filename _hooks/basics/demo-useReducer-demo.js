import React, { useContext, useReducer } from "react";
import ReactDOM from 'react-dom'

const initialState = 0;
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {number: state.number + 1};
    case 'decrement':
      return {number: state.number - 1};
    default:
      throw new Error();
  }
}
function init(initialState){
  return {number:initialState};
}
function Counter(){
  const [state, dispatch] = useReducer(reducer, initialState,init);
  return (
    <>
      Count: {state.number}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  )
}

ReactDOM.render(
    <Counter />,
  document.getElementById("root")
);



