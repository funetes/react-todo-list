import React from 'react';
import '../css/AddTodos.css';
//버튼이 눌리면 todo 하나가 생겨야 한다.

class AddTodos extends React.Component{
  render(){
    return(
      <div>
        <button className="addTodos" onClick={this.props.toggleButton}>+</button>
      </div>
    )
  }
}
export default AddTodos;
