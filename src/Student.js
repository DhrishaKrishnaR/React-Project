import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <div><h3>I am a College Student</h3>
        <h3>I am a {this.props.dept} Student</h3>
      </div>
    )
  }
}
