import React from "react"

import useForceUpdate from 'use-force-update';

const MyButton = () => {

  const forceUpdate = useForceUpdate();

  const handleClick = () => {
    // alert('I will re-render now.');
    forceUpdate();
  };

  return <button onClick={handleClick} >{Math.random()}</button>;
};

ReactDOM.render(<MyButton />, document.getElementById("root"));
