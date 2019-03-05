import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import { createStore } from "redux"
import uuidv4 from "uuid/v4"

import { TodoProps } from "./components/Todo"
import reducer from "./reducer"

export interface State {
  todos: Array<TodoProps>
}

const initialState = {
  todos: [
    {
      title: "Mow the lawn",
      content: "It really needs mowing",
      completed: false,
      dateCreated: new Date("10-12-2011")
    },
    {
      title: "Do the dishes",
      content: "Pleeeaase",
      completed: true,
      dateCreated: new Date("1-2-2016")
    }
  ].map(t => ({ ...t, id: uuidv4() }))
}

const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
