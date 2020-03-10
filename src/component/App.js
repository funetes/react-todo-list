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
      isOpen : false,
      groupName : "",
      search : ""
    }
    this.liftState = this.liftState.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.getGroupName = this.getGroupName.bind(this);
    this.showAll = this.showAll.bind(this);
    this.getSearch = this.getSearch.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  liftState(todo){
    this.setState({todos:[todo, ...this.state.todos]})
  }
  toggleButton(){
    this.setState({isOpen:!this.state.isOpen})
  }
  getGroupName(groupName){
    this.setState({groupName})
  }
  getSearch(search){
    this.setState({search})
  }
  showAll(){
    this.setState({groupName:"",search:""})
  }
  deleteTodo(id){
    this.setState({todos:this.state.todos.filter(todo=>todo.id !== id)}) 
  }
  render(){
    return(
      <div className="App">
        <div className="App__columns">
          <GroupLists 
            showAll={this.showAll}
            groups={this.state.todos} 
            getGroupName={this.getGroupName}
            switchShowState={this.switchShowState}
            getSearch={this.getSearch}/>
        </div>
        <div className="App__columns">
          <div className="App__columns__title">
            <span>ToDoList</span>
            <AddTodos toggleButton={this.toggleButton}/>
          </div>
          <Todos 
            todos={this.state.groupName === "" ? 
              this.state.todos : 
              this.state.todos.filter(todo=>todo.group === this.state.groupName)}
            liftState={this.liftState} 
            isOpen={this.state.isOpen} 
            toggleButton={this.toggleButton}
            deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    )
  }
}
export default App;
