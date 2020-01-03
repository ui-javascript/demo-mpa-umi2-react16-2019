import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { isEqual } from 'lodash'
import "./editable-cell.less"

const EditableContext = React.createContext();

const EditableRow = ({ form, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

let formRef = null

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {

    renderCell = form => {
        const { children, dataIndex, record, id, editingKey } = this.props;

        if (editingKey === record.id) {
            formRef = form
        }

        // debugger
        return (editingKey === record.id) ? (
            <Form.Item style={{ margin: 0 }}>
                {form.getFieldDecorator(dataIndex, {
                    rules: [
                        // {
                        //     required: true,
                        //     message: `${title} is required.`,
                        // },
                    ],
                    initialValue: record[dataIndex],
                })(<Input
                    ref={node => (this.input = node)}
                    // onPressEnter={this.save}
                    // onBlur={this.save}
                />)}
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{ paddingRight: 24 }}
                // onClick={this.toggleEdit}
            >
                {children}
            </div>
        );
    };

    render() {
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            children,
            id,

            editingKey,
            handleSave,
            ...restProps
        } = this.props;

        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
                ) : (
                    children
                )}
            </td>
        );
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                // width: '30%',
                key: 0,
                editable: true,
            },
            {
                title: 'age',
                dataIndex: 'age',
                editable: true,
                key: 1,
            },
            {
                title: 'address',
                dataIndex: 'address',
                editable: true,
                key: 2,
                // ellipsis: true,
            },
        ];

        this.state = {
            data: [
                {
                    id: '0',
                    name: 'Edward King 0',
                    age: '32',
                    address: 'London, Park Lane no. 0',
                },
                {
                    id: '1',
                    name: 'Edward King 1',
                    age: '32',
                    address: 'London, Park Lane no. 1',
                },
            ],
            count: 2,
            editingKey: '',
        };

    }


    handleSave = (key, record) => {

        // debugger
        formRef && formRef.validateFields((error, row) => {
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
            const index = newData.findIndex(item => key === item.id);
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

                // console.log({
                //     ...item,
                //     ...row,
                // })
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

    // handleSave = row => {
    //     const newData = [...this.state.data];
    //     const index = newData.findIndex(item => row.key === item.key);
    //     const item = newData[index];
    //     newData.splice(index, 1, {
    //         ...item,
    //         ...row,
    //     });
    //     this.setState({ data: newData });
    // };

    render() {
        const {
            data,
            editingKey,
        } = this.state;

        const components = {
            body: {
                row: EditableFormRow,
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
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editingKey: editingKey,
                    id: col.id,
                    handleSave: this.handleSave,
                }),
            };
        });

        return (
            <div>

                <Table
                    style={{ width: '100%' }}
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={data}
                    columns={columns}
                    pagination={false}
                    rowKey={(record) => record.id }
                    onRow={record => {
                        return {
                            // 鼠标移入行
                            onMouseEnter: event => {
                                // debugger
                                this.setState({
                                    editingKey: record.id
                                })
                            },
                            onMouseLeave: event => {
                                this.handleSave(editingKey, record)
                            },
                        };
                    }}
                />
            </div>
        );
    }
}

ReactDOM.render(<EditableTable />, mountNode);

