import React, { useState, ChangeEvent, FormEvent } from "react"
import { connect } from "react-redux"
import { Lens } from "monocle-ts"
import uuidv4 from "uuid/v4"

import { ADD_TODO, AddTodo } from "../reducer"
import { TodoProps } from "../components/Todo"

const emptyState = {
  title: "",
  content: ""
}

// This is overkill
const titleLens = Lens.fromProp<TodoProps>()("title")
const contentLens = Lens.fromProp<TodoProps>()("content")

const TodoForm = ({ addTodo }: any) => {
  const [{ title, content }, setState] = useState(emptyState)
  const handleChange = (lens: any) => ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>) => {
    setState(lens.set(value))
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    addTodo(title, content)
  }

  return (
    <>
      <h3>Add a new todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange(titleLens)}
        />
        <input
          type="text"
          name="content"
          value={content}
          onChange={handleChange(contentLens)}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

const addTodo = (title: string, content: string): AddTodo => ({
  type: ADD_TODO,
  todo: {
    title,
    content,
    completed: false,
    dateCreated: new Date(),
    id: uuidv4()
  }
})

export default connect(
  null,
  { addTodo }
)(TodoForm)
