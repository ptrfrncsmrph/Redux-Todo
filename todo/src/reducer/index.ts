import { combineReducers } from "redux"

const ADD_TODO = "ADD_TODO"

interface Todo {
  title: string
  completed: boolean
}

interface TodoAction {
  type: typeof ADD_TODO
  payload: Todo
}

const todos = (state: Array<Todo> = [], action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    default:
      return state
  }
}

export default combineReducers({ todos })
