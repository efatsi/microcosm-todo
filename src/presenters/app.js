import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import AddTodo from '../presenters/addTodo'
import VisibleTodoList from '../presenters/visibleTodoList'
import Footer from '../views/footer'

class App extends Presenter {
  render () {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default App
