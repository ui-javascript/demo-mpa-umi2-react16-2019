import React, { useState } from "react"
import ReactDOM from "react-dom"
import dynamic from 'umi/dynamic'

import { Button } from "antd"

const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
const App = dynamic({
  loader: async function() {
    await delay(/* 1s */1000);
    return () => <Button type="primary">I am coming after 1s</Button>;
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

