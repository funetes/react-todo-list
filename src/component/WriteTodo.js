import React from 'react';
import '../css/WriteTodo.css';
class WriteTodo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo : "",
      group : "",
      id: "",
      date : ""
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    if(this.state.todo === ""){
      alert("write a todo...");
      return null;
    }
    this.props.toggleButton();
    this.props.liftState(this.state);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const newDate = new Date();
    const toDay = `${newDate.getFullYear()}.${newDate.getMonth()}.${newDate.getDate()}`;
    this.setState({
      [name]: value,
      id: Date.now(),
      date : toDay
    });
  }
  render(){
    return(
      <form className="writeTodo" onSubmit={this.onSubmit}>
        <input 
          type="text"
          name="todo"
          placeholder="write a todo"
          onChange={this.handleInputChange}/>
        <input 
          type="text" 
          name="group"
          placeholder="write todo group"
          onChange={this.handleInputChange}/>
        <input type="submit" value="submit"/>
      </form>
    )
  }
}
export default WriteTodo;
