import React from 'react';
import ReactDOM from 'react-dom';
import "../common.scss"
import Airport from "./components/Airport";
import Gauge from "./components/Gauge";
import Gcalendar from "./components/Gcalendar";
import Graph from "./components/Graph";
import Lunar from "./components/Lunar";
import Sunburst from "./components/Sunburst";
import Svg from "./components/Svg";
import Treemap from "./components/Treemap";

function App() {
  return (
    <div>
      <Airport/>
      <Gauge/>
      <Gcalendar/>
      <Graph/>
      <Lunar/>
      <Sunburst/>
      <Svg/>
      <Treemap/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
