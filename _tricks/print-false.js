import React from "react"
import ReactDOM from "react-dom"

import {useState} from "react"

function App() {
  const [state, setState] = useState(false);

  return <div>{String(state)}</div>
}

ReactDOM.render(<App />, mountNode);
