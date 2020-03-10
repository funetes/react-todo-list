import React from 'react';
import '../css/Search.css';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm : ""
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    this.props.getSearch(this.state.searchTerm)
    this.refs.input.value = "";
  }
  onChange(e){
    const searchTerm = e.target.value;
    this.setState({searchTerm})
  }
  render(){
    return(
      <form className="search" onSubmit={this.onSubmit}>
        <input type="text" placeholder="search" ref="input" onChange={this.onChange}/>
      </form>
    )
  }
}
export default Search;