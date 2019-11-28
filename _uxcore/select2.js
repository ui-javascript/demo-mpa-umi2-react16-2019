import React, { useState } from "react"
import ReactDOM from "react-dom"

import 'uxcore/assets/iconfont.css';
import 'uxcore/assets/green.css';

import { Select } from 'uxcore';
const { Option } = Select;

const provinceData = ['浙江', '江苏'];
const cityData = {
    浙江: ['杭州', '宁波', '温州'],
    江苏: ['南京', '苏州', '镇江'],
};

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0],
        };
    }

    handleProvinceChange = (value) => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    }

    onSecondCityChange = (value) => {
        this.setState({
            secondCity: value,
        });
    }

    render() {
        const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
        const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
        return (<div>
            <Select defaultValue={provinceData[0]} style={{ width: 150 }} onChange={this.handleProvinceChange} dropdownClassName="kuma-select2-selected-has-icon">
                {provinceOptions}
            </Select>
            &nbsp;
            <Select value={this.state.secondCity} style={{ width: 150 }} onChange={this.onSecondCityChange} dropdownClassName="kuma-select2-selected-has-icon">
                {cityOptions}
            </Select>
        </div>);
    }

};

ReactDOM.render(<Demo />, mountNode);