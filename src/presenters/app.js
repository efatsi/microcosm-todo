import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import AddTodo from '../views/addTodo'
import VisibleTodoList from '../views/visibleTodoList'
import Footer from '../views/footer'
import { addTodo } from '../actions'

class App extends Presenter {
  getModel () {
    return {
      todos: data => {
        switch (data.currentFilter) {
          case 'All':
            return data.todos
          case 'Active':
            return data.todos.filter(t => !t.completed)
          case 'Completed':
            return data.todos.filter(t => t.completed)
          default:
            return data.todos
        }
      },
      filter: data => data.currentFilter
    }
  }

  handleNewTodo = (todo) => {
    this.repo.push(addTodo, todo)
  }

  render () {
    return (
      <div>
        <AddTodo newTodo={this.handleNewTodo} />
        <VisibleTodoList todos={this.model.todos} />
        <Footer currentFilter={this.model.filter}/>
      </div>
    )
  }
}

export default App
