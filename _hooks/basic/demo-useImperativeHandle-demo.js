import React, { useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import ReactDOM from 'react-dom'


function ChildInputComponent(props, ref) {
  const inputRef = useRef(null);

  // useImperativeHandle 应当与 forwardRef 一起使用
  useImperativeHandle(ref, () => inputRef.current);

  return <input type="text" name="child input" ref={inputRef} />;
}

// 穿透
const ChildInput = forwardRef(ChildInputComponent);

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
      // 父组件可以调用子组件DOM
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))

