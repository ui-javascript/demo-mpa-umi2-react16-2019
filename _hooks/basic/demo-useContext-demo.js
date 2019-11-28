import React, { useContext, useState } from "react";
import ReactDOM from 'react-dom'

const colorContext = React.createContext({});

function Bar() {
  const { color, setColor } = useContext(colorContext);

  const handleChangeColor = () => {
    setColor('green')
  }

  return <div className="cursor-pointer" onClick={handleChangeColor}>{color}</div>;
}

function Foo() {
  return <Bar />;
}

function App() {
  const [color, setColor] =  useState("grey")
  return (
    <colorContext.Provider value={{ color, setColor }}>
      <Foo />
    </colorContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))


