import React from "react"
import Todos from "./components/Todos"
import TodoForm from "./components/TodoForm"

import "./App.css"

const App = () => (
  <main className="App">
    <Todos />
    <TodoForm />
  </main>
)

export default App
