import React, { MouseEvent, MouseEventHandler } from "react"
import { connect } from "react-redux"

import { TOGGLE_TODO, ToggleTodo } from "../reducer"
import "./Todo.scss"

export interface TodoProps {
  title: string
  content: string
  completed: boolean
  dateCreated: Date
  id: string
}

interface TodoAction {
  id: string
  type: string
}

interface ConnectedTodoProps extends TodoProps {
  handleComplete: (id: string) => ToggleTodo
}

const Todo = ({
  handleComplete,
  title,
  id,
  content,
  completed,
  dateCreated
}: ConnectedTodoProps) => (
  <li className={completed ? "completed" : undefined}>
    <h3>{title}</h3>
    <p>{content}</p>
    <div>{dateCreated.toDateString()}</div>
    <button onClick={() => handleComplete(id)}>
      {completed ? "Mark as uncompleted" : "Mark as completed"}
    </button>
  </li>
)

export default connect(
  null,
  {
    handleComplete: (id: string): ToggleTodo => ({
      type: TOGGLE_TODO,
      id
    })
  }
)(Todo)
