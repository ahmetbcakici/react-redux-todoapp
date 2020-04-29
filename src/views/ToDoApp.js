import React,{useState} from 'react'
import AddToDo from '../components/AddToDo'
import Todos from '../components/Todos'

export default function ToDoApp() {
    const [todos, setTodos] = useState([
        {
            id:1,
            content:'Learn React',
            completed:false
        },
        {
            id:2,
            content:'Learn Redux',
            completed:false
        },
        {
            id:3,
            content:'Learn Node',
            completed:true
        },
    ])

    const addTodo = (content) => {
        const newTodo = {
            id:todos.length + 1,
            content,
            completed:false
        }
        setTodos([...todos,newTodo])
    }

    const toggleTodo = id => {
        console.log(id)
        setTodos(todos.filter(todo => {
            if(todo.id === id) todo.completed = !todo.completed;
            return todo;
        }))
    }


    return (
        <div style={{padding:'30px'}}>
        <AddToDo addTodo={addTodo}/>
        <Todos todos={todos} toggle={toggleTodo}/>
        </div>
    )
}
