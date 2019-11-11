import React, { useState } from "react"
import ReactDOM from "react-dom"

import { Button, Switch } from 'antd';
import { useBoolean } from '@umijs/hooks';

import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';

function App() {
    const { state, toggle, setTrue, setFalse } = useBoolean(true);

    return (
    <div>
      <p>
        Effects：
        <Switch checked={state} onChange={toggle} />
      </p>
      <p>
        <Button type="default" onClick={() => toggle()}>
          Toggle
        </Button>
        <Button type="danger" onClick={setFalse} style={{ margin: '0 16px' }}>
          Set false
        </Button>
        <Button type="primary" onClick={setTrue}>
          Set true
        </Button>
      </p>
    </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));

