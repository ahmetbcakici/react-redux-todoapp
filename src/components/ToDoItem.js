import React from 'react'

export default function ToDoItem({todo,toggle}) {
    return (
    <p style={{color:todo.completed ? 'green' : 'red'}} onClick={() => toggle(todo.id)}>{todo.content}</p>
    )
}
