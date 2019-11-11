import React from 'react';
import ReactDOM from "react-dom"

import 'antd/dist/antd.css';
import TableWithForm from './components/TableWithForm';

function App() {
    return <div><TableWithForm /></div>
}

ReactDOM.render(<App />, document.getElementById('root'));