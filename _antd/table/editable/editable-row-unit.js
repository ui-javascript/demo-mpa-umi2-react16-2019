import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { isEqual } from 'lodash'
import "./editable-cell.less"

const EditableContext = React.createContext();

const EditableRow = ({ form, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props}
            // // 鼠标移入行
            // onMouseEnter={event => {
            //
            // }}
            // onMouseLeave={event => {
            //     handleSave(form, record.id, record)
            // }}
        />
    </EditableContext.Provider>
);


const data = [];
for (let i = 0; i <1000; i++) {
    data.push({
        id: i.toString(),
        name: `${i}`,
        age: 32,
        address: `${i}` * 10,
    });
}

const globalForm = {}

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {

    renderCell = form => {
        const { children, dataIndex, record, id, editingKey, handleSave, handleSyncEditingKey } = this.props;

        if (!globalForm[editingKey]) {
            globalForm[editingKey] = form
          // handleSyncEditingKey(record.id, form)
        }

        // debugger
        return (
            <Form.Item style={{ margin: 0 }}>
                {form.getFieldDecorator(dataIndex, {
                    rules: [
                        // {
                        //     required: true,
                        //     message: `必填`,
                        // },
                    ],
                    initialValue: record[dataIndex],
                })(<Input
                    ref={node => (this.input = node)}
                    onPressEnter={() => { handleSave(record.id, record) }}
                    onBlur={() => { handleSave(record.id, record) }}
                />)}
            </Form.Item>
        )
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
            handleSyncEditingKey,

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
                title: '元素1',
                dataIndex: 'name',
                // width: '30%',
                key: 0,
                editable: true,
                width: 100,
            },
            {
                title: '元素2',
                dataIndex: 'age',
                editable: true,
                key: 1,
                width: 100,
            },
            {
                title: '计算结果',
                dataIndex: 'address',
                // editable: true,
                key: 2,
                // ellipsis: true,
                width: 200,
            },
        ];

        this.state = {
            data: data,
            editingKey: '',
            loading: false,
        };

        this.formRef = {}

    }

    handleSyncEditingKey = (key) => {
        this.setState({
            editingKey: key,
        })
    }
    
    handleSave = async (key, record) => {

        if (globalForm[key]) {
            const row = await globalForm[key].validateFields().catch(error => console.log(error))
            // console.log(row)

            // if (error) {
            //     this.setState({
            //         editingKey: ''
            //     })
            //     return;
            // }

            if (isEqual(Object.assign({}, record, row), record)) {
                // console.log('数据没啥变化')
                this.setState({
                    editingKey: ''
                })

                return;
            }


            console.log(Object.assign({}, record, row))
            // console.log(record)
            console.log('--------------------')
            const newData = [...this.state.data];
            const index = newData.findIndex(item => key === item.id);
            console.log(`修改第${index}行`)

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });

                // 立刻更新界面
                // this.setState({
                //     data: newData,
                //     editingKey: '',
                //     // loading: true,
                // });

                // 假装是请求回来的结果
                setTimeout(() => {
                    console.log('我更新了~~')
                    this.setState({
                        data: newData,
                        editingKey: '',
                        // loading: false
                    });
                }, 1000)

                return

            }

            // else {
            //     newData.push(row);
            //     this.setState({ data: newData, editingKey: '' });
            // }

            this.setState({
                editingKey: ''
            })
            return;

        }

    }



    render() {
        const {
            data,
            editingKey,
            loading,
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
                    handleSyncEditingKey: this.handleSyncEditingKey,
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
                    loading={loading}
                    dataSource={data}
                    columns={columns}
                    pagination={false}
                    rowKey={(record) => record.id }
                    // onRow={record => {
                    //     return {
                    //         // // 鼠标移入行
                    //         // onMouseEnter: event => {
                    //         //     // console.log(event)
                    //         //     // this.setState({
                    //         //     //     editingKey: record.id
                    //         //     // })
                    //         // },
                    //         // onMouseLeave: event => {
                    //         //     this.handleSave(editingKey, record)
                    //         // },
                    //
                    //         // handleSave: this.handleSave,
                    //         // handleSyncEditingKey: this.handleSyncEditingKey,
                    //         // record: record,
                    //     };
                    // }}
                />
            </div>
        );
    }
}

ReactDOM.render(<EditableTable />, mountNode);

