import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo, deleteTodo} from '../redux/actions';

function ToDoItem({todo, toggleTodo,deleteTodo}) {
  return (
      <div>
    <p
      style={{color: todo.completed ? 'green' : 'red'}}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.content}
      
    </p>
    <span onClick={() => deleteTodo(todo.id)}>SİL</span>
    </div>
  );
}

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo
};

export default connect(null, mapDispatchToProps)(ToDoItem);
