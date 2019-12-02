import React, { useState } from "react";
import ReactDOM from "react-dom";
import FormRender from "form-render/lib/antd";
import "./styles.less"

const SCHEMA = {
    "propsSchema": {
        "type": "object",
        "properties": {
            "search": {
                "type": "string",
                //
                "ui:widget": "SearchInput",
                "ui:options": {
                    "enterButton": true,
                    "placeholder": "asdfg"
                }
            },
            "string": {
                "title": "字符串",
                "type": "string"
            },
            "select": {
                "title": "单选",
                "type": "string",
                "enum": ["a", "b", "c"]
            }
        }
    }
}

import SearchInput from "./components/SearchInput";

function Demo() {
    const [formData, setData] = useState({});
    const [valid, setValid] = useState([]);

    const submit = () => {
        if (valid.length > 0) {
            alert("没有通过校验");
        } else {
            alert(JSON.stringify(formData, null, 4));
        }
    };

    return (
        <div style={{ padding: 60 }}>
            <FormRender
                {...SCHEMA}
                formData={formData}
                onChange={setData}
                onValidate={setValid}
                // 自定义组件
                widgets={{ SearchInput }}
            />
            <button onClick={submit}>提交</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Demo />, rootElement);