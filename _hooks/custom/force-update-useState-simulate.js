import React, {useEffect} from "react"
import ReactDOM from "react-dom"

import { Button } from "antd"
import useForceUpdate from "./customHooks/useForceUpdate";

function App() {
  const forceUpdate = useForceUpdate()

  // useEffect(() => {
  //   forceUpdate()
  // }, [])

  return (
    <div className='p-2'>
      <Button onClick={forceUpdate}>{Math.random()}</Button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
