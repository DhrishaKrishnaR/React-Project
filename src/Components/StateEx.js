import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,name:"Dhrisha"
      }
    }
  render() {
    return (
      <h1>{this.state.count}
      <button onClick={()=>this.setState({count:this.state.count+1})}>ClickMe {this.state.count}</button>
      </h1>
    )
  }
}
