import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import { setFilter } from '../actions'

class FilterLink extends Presenter {
  getModel () {
    return {
      currentFilter: data => data.currentFilter
    }
  }

  render () {
    let { currentFilter } = this.model
    let { filter } = this.props

    if (currentFilter === filter) {
      return <span>{filter}</span>
    }

    return (
      <a href="#"
         onClick={e => {
           e.preventDefault()
           this.repo.push(setFilter, filter)
         }}
      >
        {filter}
      </a>
    )
  }
}

export default FilterLink
