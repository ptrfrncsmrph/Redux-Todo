import React from "react"

import "./Todo.scss"

export interface TodoProps {
  title: string
  content: string
  completed: boolean
  dateCreated: Date
}

const Todo = ({ title, content, completed, dateCreated }: TodoProps) => (
  <li className={completed ? "completed" : undefined}>
    <h3>{title}</h3>
    <p>{content}</p>
    <div>{dateCreated.toDateString()}</div>
    <button>Complete</button>
  </li>
)

export default Todo
