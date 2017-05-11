import { setFilter } from '../actions'

class Todos {
  getInitialState () {
    return "All"
  }

  setFilter (state, newFilter) {
    return newFilter
  }

  register () {
    return {
      [setFilter] : this.setFilter
    }
  }
}

export default Todos
