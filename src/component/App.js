import React from 'react';
import GroupLists from './GroupLists'
import Todos from './Todos'
import AddTodos from './AddTodos'
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <div className="App__columns">
        <GroupLists />
      </div>
      <div className="App__columns">
        <div>
          <span>ToDoList</span>
          <AddTodos />
        </div>
        <Todos />
      </div>
    </div>
  );
}

export default App;
