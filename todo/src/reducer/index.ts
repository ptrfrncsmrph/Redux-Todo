import { combineReducers } from "redux"
import { TodoProps } from "../components/Todo"

const ADD_TODO = "ADD_TODO"

interface TodoAction {
  type: typeof ADD_TODO
  payload: TodoProps
}

const todos = (state: Array<TodoProps> = [], action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    default:
      return state
  }
}

export default combineReducers({ todos })
