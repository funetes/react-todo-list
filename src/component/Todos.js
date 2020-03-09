import React from 'react';
import Todo from './Todo';
import '../css/Todos.css';
// 배열로 받아서 여기서 map으로 뿌려줌

function Todos() {
  return (
    <div className="Todos">
      <Todo />
    </div>
  );
}

export default Todos;