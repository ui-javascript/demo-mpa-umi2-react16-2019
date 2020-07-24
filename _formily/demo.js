import React from 'react'
import ReactDOM from 'react-dom'
import {FormButtonGroup, LifeCycleTypes, Reset, SchemaForm, SchemaMarkupField as Field, Submit} from '@formily/antd'
import Printer from '@formily/printer'
import {Input, Select} from '@formily/antd-components' // 或者@formily/next-components
import 'antd/dist/antd.css'

const components = {
  Input,
  Select
}

const App = () => {
  return (
    <Printer>
      <SchemaForm
        labelCol={5}
        wrapperCol={14}
        components={components}
        effects={($, {setFieldState}) => {
          $(LifeCycleTypes.ON_FORM_INIT).subscribe(() => {
            setFieldState('aa', state => {
              state.value = 321
            })
          })
          $(LifeCycleTypes.ON_FIELD_VALUE_CHANGE, 'aa').subscribe(
            fieldState => {
              setFieldState('bb', state => {
                state.visible = fieldState.value === 123
              })
            }
          )
        }}
      >
        <Field
          type="string"
          title="AA"
          enum={[
            {label: '123', value: 123},
            {label: '321', value: 321}
          ]}
          name="aa"
          x-component="Select"
        />
        <Field type="string" title="BB" name="bb" x-component="Input"/>
        <FormButtonGroup offset={5}>
          <Submit>查询</Submit>
          <Reset>重置</Reset>
        </FormButtonGroup>
      </SchemaForm>
    </Printer>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
