import React, { useState } from "react"
import ReactDOM from "react-dom"
import dynamic from 'umi/dynamic'

// import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import styles from "./style.less"


const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
const App = dynamic({
  loader: async function() {
    await delay(/* 1s */1000);
    return () => <div>I will render after 1s</div>;
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

