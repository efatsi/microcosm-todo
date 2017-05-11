import React from 'react'
import FilterLink from './filterLink'

const Footer = ({ currentFilter }) => (
  <p>
    Show:
    {" "}
    <FilterLink currentFilter={currentFilter}>
      All
    </FilterLink>
    {", "}
    <FilterLink currentFilter={currentFilter}>
      Active
    </FilterLink>
    {", "}
    <FilterLink currentFilter={currentFilter}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
