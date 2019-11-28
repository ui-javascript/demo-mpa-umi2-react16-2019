import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SchemaForm, {
    getKeysFromObject,  // 获取schema.json下所有的key
    getObjectFromValue, // object对象，格式化成表单需要的值
    getValueFromObject  // 从form获取到的表单的值，格式化成object对象
} from 'antd-schema-form';
import 'antd-schema-form/style/antd-schema-form.css'; // 引入样式

// json schema
const json = {
    "id": "$root",
    "type": "object",
    "title": "Form",
    "description": "Form preview.",
    "properties": {
        "name": {
            "id": "$root/properties/name",
            "type": "string",
            "title": "Name",
            "description": "Please type in your name.",
            "$required": true
        },
        "age": {
            "id": "$root/properties/age",
            "type": "number",
            "title": "Age",
            "description": "Please enter age."
        },
        "gender": {
            "id": "$root/properties/gender",
            "type": "string",
            "title": "Gender",
            "description": "Please select gender.",
            "$componentType": "radio",
            "$options": [
                {
                    "label": "Male",
                    "value": "Male"
                },
                {
                    "label": "Female",
                    "value": "Female"
                }
            ]
        },
        "schools": {
            "id": "$root/properties/schools",
            "type": "array",
            "title": "Educational experience",
            "description": "Educational experience.",
            "items": {
                "id": "$root/properties/schools/items",
                "type": "string",
                "title": "Institution",
                "description": "Please fill in the school.",
                "$required": true
            }
        }
    }
}

ReactDOM.render(
    <SchemaForm json={json}/>,
    document.getElementById('root')
);