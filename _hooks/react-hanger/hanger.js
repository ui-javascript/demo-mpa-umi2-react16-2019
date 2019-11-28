import React from "react"
import ReactDOM from "react-dom"


import {
  useInput,
  useBoolean,
  useNumber,
  useArray,
  useOnMount,
  useOnUnmount
} from "react-hanger";

const App = () => {

  const newTodo = useInput("");
  const showCounter = useBoolean(true);
  const limitedNumber = useNumber(3, {lowerLimit: 0, upperLimit: 5});
  const counter = useNumber(0);

  const todos = useArray(["hi there", "sup", "world"]);

  const rotatingNumber = useNumber(0, {
    lowerLimit: 0,
    upperLimit: 4,
    loop: true
  });

  return (
    <div>
      <div>
        {showCounter.value && <span> {counter.value} </span>}
        <button onClick={showCounter.toggle}> toggle counter</button>
        <button onClick={() => counter.increase()}> increase</button>
        <button onClick={() => counter.decrease()}> decrease</button>
      </div>

      <div className={"mt-2"}>
        <button onClick={todos.clear}> clear todos</button>
        <input type="text" value={newTodo.value} onChange={newTodo.onChange}/>
      </div>

    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
