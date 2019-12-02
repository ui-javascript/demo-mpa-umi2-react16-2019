import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'

import styled, { css } from 'styled-components'

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const btnDefault = css`
  ${btn('#ffffff', '#d5d5d5')} color: #555;
`

const btnPrimary = btn('#4f93ce', '#285f8f')

const Styles = styled.div`
  font-family: sans-serif;

  h1 {
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
  }

  form {
    max-width: 500px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #333;
        width: 110px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type='checkbox'] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }
    button {
      margin: 0 10px;
      &[type='submit'] {
        ${btnPrimary};
      }
      &[type='button'] {
        ${btnDefault};
      }
    }
    pre {
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }
`


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const App = () => (
    <Styles>
        <h1>React Final Form - Simple Example</h1>
        <a
            href="https://final-form.org/react"
            target="_blank"
            rel="noopener noreferrer"
        >
            Read Docs
        </a>
        <Form
            onSubmit={onSubmit}
            initialValues={{ stooge: 'larry', employed: false }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <label>Employed</label>
                        <Field name="employed" component="input" type="checkbox" />
                    </div>
                    <div>
                        <label>Favorite Color</label>
                        <Field name="favoriteColor" component="select">
                            <option />
                            <option value="#ff0000">❤️ Red</option>
                            <option value="#00ff00">💚 Green</option>
                            <option value="#0000ff">💙 Blue</option>
                        </Field>
                    </div>
                    <div>
                        <label>Toppings</label>
                        <Field name="toppings" component="select" multiple>
                            <option value="chicken">🐓 Chicken</option>
                            <option value="ham">🐷 Ham</option>
                            <option value="mushrooms">🍄 Mushrooms</option>
                            <option value="cheese">🧀 Cheese</option>
                            <option value="tuna">🐟 Tuna</option>
                            <option value="pineapple">🍍 Pineapple</option>
                        </Field>
                    </div>
                    <div>
                        <label>Sauces</label>
                        <div>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="ketchup"
                                />{' '}
                                Ketchup
                            </label>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="mustard"
                                />{' '}
                                Mustard
                            </label>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="mayonnaise"
                                />{' '}
                                Mayonnaise
                            </label>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="guacamole"
                                />{' '}
                                Guacamole 🥑
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>Best Stooge</label>
                        <div>
                            <label>
                                <Field
                                    name="stooge"
                                    component="input"
                                    type="radio"
                                    value="larry"
                                />{' '}
                                Larry
                            </label>
                            <label>
                                <Field
                                    name="stooge"
                                    component="input"
                                    type="radio"
                                    value="moe"
                                />{' '}
                                Moe
                            </label>
                            <label>
                                <Field
                                    name="stooge"
                                    component="input"
                                    type="radio"
                                    value="curly"
                                />{' '}
                                Curly
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>Notes</label>
                        <Field name="notes" component="textarea" placeholder="Notes" />
                    </div>
                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    </Styles>
)

render(<App />, document.getElementById('root'))

