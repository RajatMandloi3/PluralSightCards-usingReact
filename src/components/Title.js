import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return (
      <div className='fw-bolder fs-1 text-center'>{this.props.title}</div>
    )
  }
}
