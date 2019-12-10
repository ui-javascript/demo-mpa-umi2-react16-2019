import React from 'react';
import ReactDOM from 'react-dom';
import "../common.scss"
import ZheJiang from "./components/ZheJiang";

function App() {
  return (
    <div>
      <ZheJiang/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
