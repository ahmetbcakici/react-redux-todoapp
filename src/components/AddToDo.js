import React,{useState} from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../redux/actions';

function AddToDo({addTodo}) {
    const [content, setContent] = useState('')

    return (
        <div>
            <input type="text" value={content} onChange={e => setContent(e.target.value)}/>
            <button onClick={() => addTodo(content)}>OK</button>
        </div>
    )
}

const mapDispatchToProps = {
    addTodo
}

export default connect(null, mapDispatchToProps)(AddToDo);