import React from 'react';
import ToDoItem from './ToDoItem';

export default function Todos({todos,toggle}) {
  return (
    <div>
        {todos.map(todo => {
            return <ToDoItem todo={todo} toggle={id => toggle(id)}/>
        })}
        
    </div>
  );
}
