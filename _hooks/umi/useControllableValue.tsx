import React, { useState } from "react"
import ReactDOM from "react-dom"

import { InputNumber, Button } from 'antd';
import { useControllableValue } from '@umijs/hooks';

import 'antd/dist/antd.css';

const ControllableComponent = (props: any) => {
  const [state, setState] = useControllableValue(props);

  return <InputNumber value={state} onChange={setState} style={{ width: 300 }} />;
};

const App = () => {
  const [state, setState] = useState<number>(0);
  const increment = () => {
    setState(s => s + 1);
  };

  const decrease = () => {
    setState(s => s - 1);
  };

  return (
    <>
      <ControllableComponent value={state} onChange={setState} />

      <Button.Group style={{ marginLeft: 16 }}>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrease}>Decrement</Button>
      </Button.Group>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

