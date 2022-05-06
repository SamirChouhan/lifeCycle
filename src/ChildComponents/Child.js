import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }
  render() {
    return (
      <div>Child</div>
    )
  }
}
