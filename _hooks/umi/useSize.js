import React, { useState } from "react"
import ReactDOM from "react-dom"

import { useSize } from '@umijs/hooks';

import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';

function App() {
    const [state, ref] = useSize();
    return (
      <div ref={ref}>
        try to resize the preview window <br />
        dimensions -- width: {state.width} px, height: {state.height} px
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));