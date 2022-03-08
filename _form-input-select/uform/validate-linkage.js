import React from 'react'
import ReactDOM from 'react-dom'
import { filter, withLatestFrom, map } from 'rxjs/operators'
import {
    SchemaForm,
    Field,
    FormButtonGroup,
    Submit,
    Reset,
    FormItemGrid,
    FormCard,
    FormPath,
    FormBlock,
    FormLayout,
    createFormActions
} from '@uform/antd'
import { Button, Icon } from 'antd'
import Printer from '@uform/printer'
import 'antd/dist/antd.css'

const PasswordPrefixIcon = (
    <Icon
        type="lock"
        style={{
            color: 'rgba(0, 0, 0, 0.25)',
            fontSize: 14
        }}
    />
)

const App = () => (
    <Printer>
        <SchemaForm
            labelCol={6}
            wrapperCol={6}
            effects={($, { setFieldState, getFieldState }) => {
                $('onFieldChange', '*(password,confirm)').subscribe(fieldState => {
                    const selfName = fieldState.name
                    const selfValue = fieldState.value
                    const otherName = selfName == 'password' ? 'confirm' : 'password'
                    const otherValue = getFieldState(otherName, state => state.value)
                    setFieldState(otherName, state => {
                        if (selfValue && otherValue && selfValue !== otherValue) {
                            state.errors = '两次密码输入不一致'
                        } else {
                            state.errors = ''
                        }
                    })
                    setFieldState(selfName, state => {
                        if (selfValue && otherValue && selfValue !== otherValue) {
                            state.errors = '两次密码输入不一致'
                        } else {
                            state.errors = ''
                        }
                    })
                })
            }}
        >
            <Field type="string" name="username" title="用户名" required />
            <Field
                type="password"
                name="password"
                title="密码"
                x-props={{
                    checkStrength: true,
                    prefix: PasswordPrefixIcon,
                }}
                description={
                    <ul>
                        <li>1. 长度不小于8个</li>
                        <li>2. 必须包含大小写数字符号</li>
                    </ul>
                }
                required
            />
            <Field
                type="password"
                name="confirm"
                title="确认密码"
                x-props={{
                    checkStrength: true,
                    prefix: PasswordPrefixIcon,
                }}
                required
            />
            <FormButtonGroup offset={6}>
                <Submit />
                <Reset />
            </FormButtonGroup>
        </SchemaForm>
    </Printer>
)
ReactDOM.render(<App />, document.getElementById('root'))