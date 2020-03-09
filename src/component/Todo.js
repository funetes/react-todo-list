import React from 'react';
import Done from './Done';
import Edit from './Edit';
import '../css/Todo.css';
function Todo() {
  return (
    <div className="Todo">
      <div className="Todo__content">
        <div>todo : </div>
        <div>group : </div>
        <div>createdAt : </div>
      </div>
      <div className="Todo__todoButtons">
        <Done />
        <Edit />
      </div>
    </div>
  );
}

export default Todo;