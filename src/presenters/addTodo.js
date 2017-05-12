import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import { addTodo } from '../actions'

class AddTodo extends Presenter {
  handleNewTodo (text) {
    this.repo.push(addTodo, text)
  }

  render () {
    let input

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.handleNewTodo(input.value)
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

export default AddTodo
