import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {message } from 'antd'

function App() {
    const $count = useRef(0);
    const [count, setCount] = useState(0)

    const showCount = () => {
      message.success("count: " + $count.current)
    };

    const handleClick = number => {
      $count.current = $count.current + number;

      // @TODO 这句注释，会无法更新?????
      setCount($count.current)

      setTimeout(showCount, 1000);
    };

    // useEffect(() => {
    //   debugger
    //   setCount($count.current)
    // }, [$count])


    return (
      <div>
        {/* <p>You clicked {count} times</p> */}
        <p>You clicked {$count.current} times</p>
        <button onClick={() => handleClick(1)}>增加 count</button>
        <button onClick={() => handleClick(-1)}>减少 count</button>
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"))

