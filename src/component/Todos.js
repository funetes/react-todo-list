import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {fakeData} from '../fakeData';
import '../css/Todos.css';
// 배열로 받아서 여기서 map으로 뿌려줌

function Todos({todos}) {
  return (
    <div className="Todos">
      {fakeData.map(el => <Todo todo={el} />)}
    </div>
  );
}

export default connect()(Todos);