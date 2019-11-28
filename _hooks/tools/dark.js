import React from 'react';
import ReactDOM from 'react-dom';
import useDarkMode from 'use-dark-mode';

import "./theme.scss"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button type="button" onClick={darkMode.disable}>☀</button>
      <button type="button" onClick={darkMode.enable}>☾</button>
    </div>
  );
};

function App () {
  return <DarkModeToggle />
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
