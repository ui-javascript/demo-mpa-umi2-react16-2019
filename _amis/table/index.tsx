import React from 'react';
import {
    render as renderAmis
} from 'amis';

import ReactDOM from 'react-dom'

const json = {
    "$schema": "https://houtai.baidu.com/v2/schemas/page.json#",
    "type": "page",
    "title": "这是标题部分",
    "subTitle": "这是子标题",
    "remark": "这是小提示信息",
    "aside": "这是侧边栏部分",
    "body": "这是内容区",
    "toolbar": "这是工具栏部分"
}

class App extends React.Component<any, any> {
    render() {
        return (<div>
            {renderAmis(json, {}, {})}
        </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))