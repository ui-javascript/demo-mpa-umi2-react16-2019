import React from 'react'
import ReactDOM from 'react-dom'
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
import { Button } from 'antd'
import Printer from '@uform/printer'
import 'antd/dist/antd.css'

const App = () => (
    <Printer>
        <SchemaForm>
            <Field
                title="数组"
                name="array"
                maxItems={3}
                type="array"
                x-component="table"
                x-props={{
                    renderExtraOperations(){
                        return <div>Delete</div>
                    },
                    operationsWidth:400
                }}
            >
                <Field type="object">
                    <Field
                        name="aa"
                        type="string"
                        description="hello world"
                        title="字段1"
                    />
                    <Field name="bb" type="string" title="字段2" />
                    <Field name="cc" type="string" title="字段3" />
                    <Field name="dd" type="string" title="字段4" />
                    <Field name="dd" type="string" title="字段5" />
                    <Field name="ee" type="string" title="字段6" />
                    <Field name="ff" type="string" title="字段7" />
                    <Field name="gg" type="daterange" title="字段8" width={400}  />
                </Field>
            </Field>
        </SchemaForm>
    </Printer>
)
ReactDOM.render(<App />, document.getElementById('root'))