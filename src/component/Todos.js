import React from 'react';
import Todo from './Todo';
import WriteTodo from './WriteTodo'
import '../css/Todos.css';

function Todos({todos,liftState,isOpen,toggleButton,deleteTodo}) {
  return (
    <div className="Todos">
      {isOpen ? <WriteTodo liftState={liftState} toggleButton={toggleButton}/> : null}
      {todos.map(el => <Todo todo={el} key={el.id} deleteTodo={deleteTodo}/> )}
    </div>
  );
}

export default Todos;