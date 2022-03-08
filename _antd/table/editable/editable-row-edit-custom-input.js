import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';

import "./editable-row.less"


function getData () {
    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i.toString(),
            name: `Edrward ${i} ${Math.random()}`,
            age: 10,
            address: `London Park no. ${i}`,
        });
    }

    return data
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: getData(), 
        };
        
        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                width: '25%',
                editable: true,
            },
            {
                title: 'age',
                dataIndex: 'age',
                width: '15%',
                editable: true,
                render: (text, record) => {
                    return <InputNumber style={{ wdith: '100%' }} defaultValue={text} onChange={(values) => { this.handleInputNumberChange(values, record) }} />
                },
            },
            {
                title: 'address',
                dataIndex: 'address',
                width: '40%',
                editable: true,
              
            },
        ];
    }

    handleInputNumberChange = (values, record) => {
        const newData = [...this.state.data];
        const index = newData.findIndex(item => record.key === item.key);
    
    
        if (index > -1) {
            const item = newData[index];            
            const newLine = {
                ...item,
                ...record,
                age: values,
            }
          

            setTimeout(() => {
                newData.splice(index, 1, newLine);
                this.setState({ 
                    // data: newData, 
                    data: getData(), 
                });

                console.log('我变了~~')
                console.log(newLine)
            }, 2000)


           
        } 
    }

    cancel = () => {
    };

 


    render() {
       
        return (
        
            <Table
                bordered
                dataSource={this.state.data}
                columns={this.columns}
                rowClassName="editable-row"
                pagination={{
                    onChange: this.cancel,
                }}
            />
     
        );
    }
}

const EditableFormTable = Form.create()(EditableTable);

ReactDOM.render(<EditableFormTable />, mountNode);

