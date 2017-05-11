import React from 'react'
import withSend from 'microcosm/addons/with-send'
import { toggleTodo } from '../actions'

const VisibleTodoList = withSend(function ({ send, todos }) {
  return (
    <ul>
      {todos.map(todo =>
        <li
          key={todo.id}
          onClick={() => send(toggleTodo, todo.id)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
          {todo.text}
        </li>
      )}
    </ul>
  )
})

export default VisibleTodoList
