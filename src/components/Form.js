import React, { Component } from 'react'
import axios from "axios";

export default class Form extends Component {
  //  userNameInput=React.createRef(); //1
state ={userName:''}  
  handleSubmit=async(event)=>{
    event.preventDefault();
    const resp=await axios.get(`https://api.github.com/users/${this.state.userName}`)
    // console.log(this.userNameInput.current.value);//1
    this.props.onSubmit(resp.data);
    this.setState({userName:''})
  }
  
  render() {
    return (
      <div className='container text-center mt-5 '>
        <form onSubmit={this.handleSubmit}>
            {/* <input type="text" placeholder='Profile name' ref={this.userNameInput} required /> //1*/}
            <input type="text" placeholder='Profile name'  value={this.state.userName} onChange={event=> this.setState({userName:event.target.value})} required />
            <button>Add card</button>
        </form>
      </div>
    )
  }
}
