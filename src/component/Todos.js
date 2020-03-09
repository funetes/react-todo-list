import React from 'react';
import Todo from './Todo';
import WriteTodo from './WriteTodo'
import {connect} from 'react-redux';
// import {fakeData} from '../fakeData';
import '../css/Todos.css';
// 배열로 받아서 여기서 map으로 뿌려줌

function Todos({todos,liftState,isOpen,toggleButton}) {
  return (
    <div className="Todos">
      {isOpen ? <WriteTodo liftState={liftState} toggleButton={toggleButton}/> : null}
      {todos.map(el => <Todo todo={el} key={el.id}/>)}
    </div>
  );
}

export default connect()(Todos);