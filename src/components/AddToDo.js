import React,{useState} from 'react'

export default function AddToDo({addTodo}) {
    const [content, setContent] = useState('')

    return (
        <div>
            <input type="text" value={content} onChange={e => setContent(e.target.value)}/>
            <button onClick={() => addTodo(content)}>OK</button>
        </div>
    )
}
