import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import { isEqual } from 'lodash'
import "./editable-row.less"

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}

const EditableContext = React.createContext();

class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber style={{ width: '100%'}} />;
        }
        return <Input  style={{ width: '100%'}}  />;
    };

    renderCell = ({ getFieldDecorator }) => {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item style={{ margin: 0 }}>
                        {getFieldDecorator(dataIndex, {
                            initialValue: record[dataIndex],
                        })(this.getInput())}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };

    render() {
        return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            editingKey: ''
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
            },
            {
                title: 'address',
                dataIndex: 'address',
                width: '40%',
                editable: true,
            },
        ];
    }

    isEditing = record => record.key === this.state.editingKey;

    cancel = () => {
        this.setState({ editingKey: '' });
    };


    handleSave = (key, record) => {
        const { form } = this.props

        // debugger
        form.validateFields((error, row) => {
            if (error) {
                this.setState({
                    editingKey: ''
                })
                return;
            }

            if (isEqual(Object.assign({}, record, row), record)) {
                console.log('数据没啥变化')
                this.setState({
                    editingKey: ''
                })
                return;
            }

            console.log(Object.assign({}, record, row))
            console.log(record)
            const newData = [...this.state.data];
            const index = newData.findIndex(item => key === item.key);
            console.log(`修改第${index}行`)

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });

                this.setState({
                    data: newData,
                    editingKey: ''
                });

                console.log({
                    ...item,
                    ...row,
                })
            }

            // else {
            //     newData.push(row);
            //     this.setState({ data: newData, editingKey: '' });
            // }

            this.setState({
                editingKey: ''
            })
            return;

        });

    }



    edit(key) {
        this.setState({ editingKey: key });
    }

    render() {
        const components = {
            body: {
                cell: EditableCell,
            },
        };

        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: col.dataIndex === 'age' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        return (
            <EditableContext.Provider value={this.props.form}>
                <Table
                    components={components}
                    bordered
                    dataSource={this.state.data}
                    columns={columns}
                    rowClassName="editable-row"
                    onRow={record => {

                        return {
                            // 鼠标移入行
                            onMouseEnter: event => {
                                // debugger
                                this.setState({
                                    editingKey: record.key
                                })
                            },
                            onMouseLeave: event => {
                                ((key, record) => {
                                    this.handleSave(key)
                                })(record.key, {...record})
                            },
                        };
                    }}
                    pagination={{
                        onChange: this.cancel,
                    }}
                />
            </EditableContext.Provider>
        );
    }
}

const EditableFormTable = Form.create()(EditableTable);

ReactDOM.render(<EditableFormTable />, mountNode);

