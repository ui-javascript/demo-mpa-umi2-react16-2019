import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { filter, withLatestFrom, map, debounceTime } from 'rxjs/operators'
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

const App = () => {
    const [state, setState] = useState({ visible: false })
    return (
        <Printer>
            <SchemaForm
                effects={($, { setFieldState, getFieldState }) => {
                    $('onFormInit').subscribe(() => {
                        setFieldState(FormPath.match('*(gg,hh)'), state => {
                            state.props['x-props'] = state.props['x-props'] || {}
                            state.props['x-props'].style = {
                                width: 200
                            }
                            if (state.name == 'hh') {
                                state.visible = false
                            }
                        })
                    })
                    $('onFieldChange', 'aa').subscribe(fieldState => {
                        setFieldState('bb', state => {
                            state.visible = !fieldState.value
                        })
                    })

                    $('onFieldChange', 'cc').subscribe(fieldState => {
                        setFieldState('dd', state => {
                            state.visible = !fieldState.value
                        })
                        setFieldState('gg', state => {
                            if (fieldState.value) {
                                state.value = 'aaaa'
                                state.props.enum = [
                                    { label: 'aaaa', value: 'aaaa', extra: ['x1', 'x2', 'x3'] },
                                    { label: 'bbbb', value: 'bbbb', extra: ['x4', 'x5', 'x6'] },
                                    { label: 'cccc', value: 'cccc', extra: ['x7', 'x8', 'x9'] }
                                ]
                            } else {
                                state.value = '123333'
                                state.props.enum = ['123333', '333333']
                            }
                        })
                    })
                    $('onFieldChange', 'mm').subscribe(fieldState => {
                        setFieldState('ff', state => {
                            state.visible = !fieldState.value
                        })
                    })
                    $('onFieldChange', 'gg')
                        .pipe(
                            withLatestFrom($('onChangeOption')),
                            map(([fieldState, { payload: option }]) => {
                                return {
                                    state: fieldState,
                                    option
                                }
                            })
                        )
                        .subscribe(({ state, option }) => {
                            setFieldState('hh', state => {
                                if (option && option.extra && option.extra.length) {
                                    state.visible = true
                                    state.props.enum = option.extra
                                } else {
                                    state.visible = false
                                }
                            })
                        })
                    $('onSearch', 'gg')
                        .pipe(
                            map(fieldState => {
                                setFieldState('gg', state => {
                                    state.loading = true
                                })
                                return fieldState
                            }),
                            debounceTime(400)
                        )
                        .subscribe(({ payload }) => {
                            fetch('//dip.taobao.net/api/v2/services/schema/mock/94047')
                                .then(res => res.json())
                                .then(data => {
                                    setFieldState('gg', state => {
                                        state.loading = false
                                        state.props.enum = data
                                    })
                                })
                        })
                }}
                labelCol={6}
                wrapperCol={4}
                onSubmit={v => console.log(v)}
            >
                <FormBlock title="Block1">
                    <Field
                        name="aa"
                        type="boolean"
                        x-component="radio"
                        default={true}
                        enum={[{ label: '是', value: true }, { label: '否', value: false }]}
                        title="是否隐藏AA"
                    />
                    <Field name="bb" type="string" title="AA" />
                    <Field
                        name="cc"
                        type="boolean"
                        title="是否隐藏DD"
                        default={true}
                        x-component="radio"
                        enum={[{ label: '是', value: true }, { label: '否', value: false }]}
                    />
                </FormBlock>
                <FormBlock name="dd" title="Block2">
                    <Field name="ee" type="date" title="EE" />
                    <Field
                        name="mm"
                        type="boolean"
                        x-component="radio"
                        default={true}
                        enum={[{ label: '是', value: true }, { label: '否', value: false }]}
                        title="是否隐藏FF"
                    />
                    <Field name="ff" type="number" title="FF" />
                </FormBlock>
                <FormBlock name="kk" title="Block3">
                    <Field
                        name="gg"
                        type="string"
                        x-effect={dispatch => ({
                            onChange(value, option) {
                                dispatch('onChangeOption', option)
                            },
                            onSearch(value) {
                                dispatch('onSearch', value)
                            }
                        })}
                        title="GG"
                        x-props={{ showSearch: true, filterLocal: false }}
                    />
                    <Field name="hh" type="string" title="HH" enum={[]} x-props={{ style: { maxWidth: 300 } }} />
                    {state.visible && <Field name="MM" type="string" title="MM" />}
                </FormBlock>
                <FormButtonGroup offset={6}>
                    <Submit />
                    <Reset />
                    <Button onClick={() => setState({ visible: !state.visible })}>
                        {!state.visible ? '显示MM' : '隐藏MM'}
                    </Button>
                </FormButtonGroup>
            </SchemaForm>
        </Printer>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))