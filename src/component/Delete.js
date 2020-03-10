import React from 'react';
import '../css/Del.css';

function Del({deleteTodo,id}) {
  return(
    <button className="deleteTodo" onClick={()=>{deleteTodo(id)}}>Del</button>
  )
}

export default Del;