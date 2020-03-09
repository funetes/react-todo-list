import React from 'react';
import GroupLists from './GroupLists'
import Todos from './Todos'
import AddTodos from './AddTodos'
import '../css/App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos : [],
      isOpen : false
    }
    this.liftState = this.liftState.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }
  liftState(todo){
    this.setState({todos: [todo, ...this.state.todos]})
  }
  toggleButton(){
    this.setState({isOpen: !this.state.isOpen})
  }
  render(){
    return(
      <div className="App">
        <div className="App__columns">
          <GroupLists />
        </div>
        <div className="App__columns">
          <div className="App__columns__title">
            <span>ToDoList</span>
            <AddTodos toggleButton={this.toggleButton}/>
          </div>
          <Todos 
            todos={this.state.todos} 
            liftState={this.liftState} 
            isOpen={this.state.isOpen} 
            toggleButton={this.toggleButton}/>
        </div>
      </div>
    )
  }
}
export default App;
