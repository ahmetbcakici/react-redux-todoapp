import React, {useState} from 'react';
import AddToDo from '../components/AddToDo';
import Todos from '../components/Todos';
import {connect} from 'react-redux';
import {addTodo,toggleTodo} from '../redux/actions';

function ToDoApp({todos, addTodo,toggleTodo}) {
 /* const toggleTodo = (id) => {
    /*  console.log(id);
    setTodos(
      todos.filter((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };*/

  return (
    <div style={{padding: '30px'}}>
      <AddToDo addTodo={addTodo} />
      <Todos todos={todos} toggle={toggleTodo} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer,
  };
};

const mapDispatchToProps = {
    addTodo,
    toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
