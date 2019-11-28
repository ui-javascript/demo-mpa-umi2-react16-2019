import React, { useRef }  from 'react';
import ReactDOM from 'react-dom';
import ReactToPrint from 'react-to-print';

import './typo.scss'

function App () {
  const componentRef = useRef();

  return (
    <div>

      {/*<button onClick={() => {*/}
      {/*  this.printRef.handlePrint()*/}
      {/*}}></button>*/}


      <ReactToPrint
        // ref={el => (this.printRef = el)}
        // content={ () => this.componentRef }

        // hooks写法
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />

      <div
        // ref={el => (this.componentRef = el)}

        // hooks写法
        ref={componentRef}
        className={"p-5"}
      >

        <div className={"typo"}>

          <img src="https://www.awesomes.cn/images/logo.png" alt=""/>
          <table className={'mt-2'}>
            <thead>
            <tr>
              <th>column 1</th>
              <th>column 2</th>
              <th>column 3</th>
            </tr>

            </thead>
            <tbody>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
};



ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
