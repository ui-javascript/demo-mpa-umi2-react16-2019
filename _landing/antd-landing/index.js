import React from 'react';
import ReactDOM from 'react-dom';

// 全局样式
import './styles/_base/custom.less';
import './styles/header.less';
import './styles/home.less';
import './styles/footer.less';
import './styles/responsive.less';

import Home from './components/Home';

function App() {
  return (
    <Home />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
