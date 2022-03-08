import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return [
      <div key="test" custom-attribute="something" >自定义属性</div>,
    ];
  }
}

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(42);
  const [count2, setCount2] = useState(212);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(`You clicked ${count} times`);
  }, [count2]);

  return (
    <div className='p-2'>
      <button className="btn btn-default" onClick={() => setCount(count + 1)}>{count}</button>
      <button className="btn btn-primary ml-2" onClick={() => setCount2(count2 + 1)}>{count2}</button>
    </div>
  );
}


ReactDOM.render([
    <App key="app" />,
    <Example key="example" />],
  document.getElementById("root"));
