import React from "react";
import {Input} from "antd";

const {Search} = Input;

export default function SearchInput({
    options,
    value,
    rootValue,
    name,
    onChange
}) {
    const handleChange = e => onChange(name, e.target.value);

    const handleSearch = value => {
        alert(JSON.stringify(rootValue));
    };

    return (
        <div style={{width: "100%"}}>
            <Search
                onSearch={handleSearch}
                {...options}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}
