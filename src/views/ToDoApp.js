import React from 'react';
import AddToDo from '../components/AddToDo';
import Todos from '../components/Todos';

export default function ToDoApp() {
  return (
    <div style={{padding: '30px'}}>
      <AddToDo />
      <Todos />
    </div>
  );
}