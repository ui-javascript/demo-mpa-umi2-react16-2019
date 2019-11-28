import React, {useReducer} from "react"
import ReactDOM from "react-dom"

// 定义初始状态
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}


function Counter() {
  // 返回state，以及dispatch函数
  // dispatch函数可以触发reducer执行，给reducer传递指令和载荷
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}


ReactDOM.render(<Counter />, document.getElementById("root"));
