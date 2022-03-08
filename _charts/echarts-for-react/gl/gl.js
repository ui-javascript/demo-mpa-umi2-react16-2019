import React from 'react';
import ReactDOM from 'react-dom';
import "../common.scss"
import Gl from "./components/Gl";

function App() {
  return (
    <div>

      <Gl />

    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
