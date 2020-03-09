import React from 'react';
import Done from './Done';
import Edit from './Edit';
import '../css/Todo.css';
function Todo({todo}) {
  return (
    <div className="Todo">
      <div className="Todo__content">
        <div>todo : {todo.todo}</div>
        <div>group :  {todo.group}</div>
        <div>createdAt : {todo.createdAt}</div>
      </div>
      <div className="Todo__todoButtons">
        <Done />
        <Edit />
      </div>
    </div>
  );
}

export default Todo;