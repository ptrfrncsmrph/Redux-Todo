import { combineReducers } from "redux"
import { TodoProps } from "../components/Todo"

export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

export interface AddTodo {
  type: typeof ADD_TODO
  todo: TodoProps
}

export interface ToggleTodo {
  type: typeof TOGGLE_TODO
  id: string
}

type TodoAction = AddTodo | ToggleTodo

const todos = (state: Array<TodoProps> = [], action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case TOGGLE_TODO:
      return state.map(t =>
        t.id === action.id ? { ...t, completed: !t.completed } : t
      )
    default:
      return state
  }
}

export default combineReducers({ todos })
