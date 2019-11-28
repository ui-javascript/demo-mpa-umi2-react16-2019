import React from "react"
import ReactDOM from "react-dom"

import { PasswordInput } from 'antd-password-input-strength'
import { Button, Form } from "antd"

const CreateForm = Form.create()(props => {
    const { form } = props;

    const okHandle = () => {
      form.validateFields((err, fieldsValue) => {
        if (err) {
            return;
        }

        form.resetFields();
      });
    };
    return (
      <Form>
        <Form.Item labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="密码">
          {form.getFieldDecorator('desc', {
            rules: [
              { required: true, message: '请输入至少五个字符的规则描述！', min: 5 }
            ],
          })(<PasswordInput inputProps={{}}  placeholder="请输入" />)}
        </Form.Item>
        <Form.Item labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="提交">
          <Button type="primary" onClick={okHandle}>提交</Button>
        </Form.Item>
      </Form>
    );
  });



function App() {

  return (
    <div className="p-10">
      <CreateForm />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
