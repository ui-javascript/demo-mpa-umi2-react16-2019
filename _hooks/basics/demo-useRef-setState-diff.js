import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {message} from 'antd' 

function App() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        message.success("count: " + count)
      }, 3000);
    }, [count]);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>增加 count</button>
        <button onClick={() => setCount(count - 1)}>减少 count</button>
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"))

  
