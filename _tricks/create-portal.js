import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.body;

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
    this.el.style.width = "200px";
    this.el.style.height = "200px";
    this.el.style.backgroundColor = "green";
    this.el.style.position = "absolute";
    this.el.style.top = "100px";
    this.el.style.left = "100px";
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

function Child() {
  return (
    <div className="modal">
      这个是通过ReactDOM.createPortal创建的内容
    </div>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal>
        <Child/>
      </Modal>
    );
  }
}


ReactDOM.render(<App/>, mountNode);


