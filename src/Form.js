import React from "react"
import axios from 'axios'

class Form extends React.Component{
  state = { userName: ''};
  
  handleSubmit = async (event) => {
    event.preventDefault();    
    const response = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(response.data);
  };
  
  render(){
    return(
      <form onSubmit={this.handleSubmit} style={{marginLeft:25}}>
        <input 
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({userName: event.target.value})}
          placeholder="Github Username" 
          required
          />
        <button> Add card </button>
    </form>

    )
  }
}

  export default Form;