import { Slider, InputNumber, Row, Col } from 'antd';
import {useState} from "react";
import ReactDOM from 'react-dom'
// import { cloneDeep } from "lodash"


function App() {
    const [inputValue, setInputValue] = useState([0, 0])

    const onChange = (value) => {
        setInputValue(value)
    }

    const onAfterChange = (value) => {
        console.log('onAfterChange: ', value);
    }

    return (
        <Row>
            <Col span={6}>
                <InputNumber
                    min={0}
                    value={inputValue[0]}
                    onChange={ (value) => {setInputValue([Number(value) || 0, inputValue[1]].sort()) }}
                />

            <Slider
                range
                max={10000}
                step={10}
                defaultValue={[0, 0]}
                value={inputValue}
                onChange={onChange}
                onAfterChange={onAfterChange}
            />

                <InputNumber
                    min={0}
                    value={ inputValue[1] }
                    onChange={ (value) => { setInputValue([inputValue[0] || 10000, Number(value)].sort()) }}
                />
            </Col>
        </Row>
    );
}

ReactDOM.render(<App />, mountNode);

