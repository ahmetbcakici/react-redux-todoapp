import React from 'react';
import {connect} from 'react-redux';

import ToDoItem from './ToDoItem';

function Todos({todos}) {
  return (
    <div>
      {todos.map((todo) => {
        return <ToDoItem key={todo.id} todo={todo}/>;
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer,
});

export default connect(mapStateToProps)(Todos);
