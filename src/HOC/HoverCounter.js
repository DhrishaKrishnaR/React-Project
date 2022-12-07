import React, { Component } from 'react'
import EnComponent from './Hoc'

class HoverCounter extends Component {
  render() {
    const {name,count,inc}=this.props
    return (
      <div>
      {name}
      <h1 onMouseEnter={inc}>
      {name}<br></br>
      HoverMe{count}
      </h1></div>
    )
  }
}
export default EnComponent(HoverCounter)
