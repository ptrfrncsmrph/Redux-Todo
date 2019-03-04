import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import { createStore } from "redux"

import { TodoProps } from "./components/Todo"
import reducer from "./reducer"

export interface State {
  todos: Array<TodoProps>
}

const store = createStore(reducer, {
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
  ]
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
