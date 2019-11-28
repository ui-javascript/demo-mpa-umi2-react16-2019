import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import useFetch from 'use-http'

import { Spin, message } from  "antd"

function Todos() {
  const [todos, setTodos] = useState([])

  const request = useFetch('https://easy-mock.com/mock/58ff414f5e43ae5dbea60145/example')

  // on mount, initialize the todos
  useEffect(() => {
    initializeTodos()
  }, [])

  async function initializeTodos() {
    const res = await request.get('/todos')
    setTodos(res.data)
  }

  async function addTodo() {
    const res = await request.post('/todos', {
      title: 'no way',
    })
    message.success("ok")

    setTodos(oldTodos => [...oldTodos, res.data])
  }

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {request.error && 'Error!'}

      <div>
        {request.loading && 'Loading...'}
      </div>

      <div>
        <Spin spinning={request.loading}>
          {todos.length > 0 && todos.map(todo => (
            <div key={todo.id}>{todo.title}</div>
          ))}
        </Spin>
      </div>

    </>
  )
}

ReactDOM.render(<Todos />, document.getElementById("root"));
