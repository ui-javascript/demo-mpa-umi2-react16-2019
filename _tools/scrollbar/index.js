import React from "react";
import ReactDOM from "react-dom";

import ScrollArea from 'react-scrollbar'
// var ScrollArea = require('react-scrollbar/no-css');

function App () {

  return <ScrollArea
    speed={0.8}
    // className="area"
    // contentClassName="content"
    style={{
      width: 200,
      // overflowX: 'auto',
      // height: 200
    }}
    contentStyle={{
      minWidth: 400
    }}
    horizontal={true}
    // horizontalContainerStyle={{
    //   width: 200,
    //   height: 100
    // }}
    // horizontalScrollbarStyle={Object}

    // smoothScrolling= {true}
    // minScrollSize={40}
    // height={200}
    // width={100}
  >
    <div>Some long content.Some long content.Some long content.Some long content.Some long content.Some long content.Some long content.Some long content.</div>
  </ScrollArea>
}

ReactDOM.render(
  <App />,
  document.getElementById("root"));
