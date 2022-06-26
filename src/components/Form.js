import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div className='container text-center mt-5 '>
        <form onsubmit={this.handle}>
            <input type="text" placeholder='name' required />
            <button>Add card</button>
        </form>
      </div>
    )
  }
}
