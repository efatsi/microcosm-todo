let nextTodoId = 0

export function addTodo (text) {
  return {
    id: nextTodoId++,
    completed: false,
    text
  }
}

export function toggleTodo (id) {
  return id
}

export function setFilter (newFilter) {
  return newFilter
}
