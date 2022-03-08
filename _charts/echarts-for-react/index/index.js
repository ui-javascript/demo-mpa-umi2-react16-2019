import React from 'react';
import ReactDOM from 'react-dom';
import "../common.scss"
import Simple from "./components/Simple";
import Api from "./components/Api";
import Calendar from "./components/Calendar";
import Dynamic from "./components/Dynamic";
import Events from "./components/Events";
import Loading from "./components/Loading";
import Theme from "./components/Theme";

function App() {
  return (
    <div>
      <Simple/>
      <Events/>

      <Api/>
      <Calendar/>
      <Dynamic/>
      <Loading/>
      <Theme/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
