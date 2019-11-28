import React from "react"
import ReactDOM from "react-dom"

import { Button, Input, message } from "antd"
import { useFormTable } from 'sunflower-antd';

import 'antd/es/style/themes/default.less';

function request (values) {
  message.info(JSON.stringify(values))
}

function Component(props) {

    const { Form, Table, form } = useFormTable({
        search: (values) => request(values),
        defaultPageSize: 5,
      });
      
    return <div className="w-1/2 p-2">
    <Form layout="inline">
      <Form.Item
        label="Username"
        name="username"
      >
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item>
        <Button onClick={() => form.resetFields()}>
            Reset
          </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>

    <Table
      style={{marginTop: 20}}
      columns={[
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        }
      ]}
      rowKey="id"
      pagination={{
        showQuickJumper: true,
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '20', '50'],
      }}
    />
  </div>;
  }


ReactDOM.render(<Component />, document.getElementById("root"));
