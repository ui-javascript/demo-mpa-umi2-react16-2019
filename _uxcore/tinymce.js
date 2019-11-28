import React, { useState } from "react"
import ReactDOM from "react-dom"

import classnames from 'classnames';
import { Tinymce } from 'uxcore';

import 'uxcore/assets/iconfont.css';
import 'uxcore/assets/blue.css';

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleKeyUp(e, editor) {
        console.log(editor.getContent());
    }

    handleChange(e, editor) {
        console.log(editor.getContent());
    }

    render() {
        const me = this;
        return (
            <Tinymce
                onKeyup={me.handleKeyUp.bind(me)}
                onChange={me.handleChange.bind(me)}
                placeholder={'placeholder'}
            />
        );
    }
}


ReactDOM.render(<Demo />, document.getElementById("root"));