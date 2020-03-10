import React from 'react';
import Done from './Done';
import Delete from './Delete';
import '../css/Todo.css';

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      done : false
    }
    this.getDoneState = this.getDoneState.bind(this);
  }
  getDoneState(){
    this.setState({done : !this.state.done})
  }
  render(){
    const {todo,deleteTodo} = this.props;
    return(
      <div className={`Todo ${this.state.done ? 'done' : 'notyet'}` }>
      <div className="Todo__content">
        <div>todo : {todo.todo}</div>
        <div>group :  {todo.group}</div>
        <div>{todo.date}</div>
      </div>
      <div className="Todo__todoButtons">
        <Done getDoneState={this.getDoneState} done={this.state.done}/>
        <Delete deleteTodo={deleteTodo} id={todo.id}/>
      </div>
    </div>
    )
  }
}
export default Todo;