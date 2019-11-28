import React from 'react';
import ReactDOM from 'react-dom';
import "../common.scss"
import Map from "./components/Map";

function App() {
  return (
    <div>
      <Map/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
