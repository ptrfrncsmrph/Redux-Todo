import React from "react"
import { connect } from "react-redux"
import Todo, { TodoProps } from "./Todo"

import "./Todos.scss"

interface TodosProps {
  todos: Array<TodoProps>
}

const Todos = ({ todos }: TodosProps) =>
  todos.length ? (
    <ul>
      {todos.map((todo, ix) => (
        <Todo key={ix} {...todo} />
      ))}
    </ul>
  ) : (
    <span>Nothing to show</span>
  )

const mapStateToProps = ({ todos }: TodosProps) => ({
  todos
})

export default connect(mapStateToProps)(Todos)
