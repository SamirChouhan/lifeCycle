import React, { Component } from 'react'

export default class Nav extends Component {
    componentWillUnmount(){
        console.log("Component Will UnMount");
    }
  render() {
    return (
      <div>Nav bar</div>
    )
  }
}
