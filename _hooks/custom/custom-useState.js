import React, { useState } from "react"
import ReactDOM from "react-dom"
import useSetState from "./customHooks/useSetState";
import {Button} from "antd"

function App() {
  // const [state, setState] = useState({ name: 'sx', age: 1 })

  // 改用自定义setState,符合之前的setState性质
  const [state, setState] = useSetState({name: 'sx', age: 1})
  
  // 新增
  const incrementAge = () => {
    // setState(prev => ({ age: prev.age + 1 }))
    setState({ age: state.age + 1 })
  }

  return (
    <div>
      <Button onClick={incrementAge}>过年</Button>
      <div>
        姓名: {state.name}
      </div>
      <div>
        年龄: {state.age}
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));
