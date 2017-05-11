import React from 'react'
import withSend from 'microcosm/addons/with-send'
import { setFilter } from '../actions'

const FilterLink = withSend(function ({ send, currentFilter, children }) {
  if (currentFilter === children) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         send(setFilter, children)
       }}
    >
      {children}
    </a>
  )
})

export default FilterLink
