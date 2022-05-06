import React, { Component } from 'react'

export default class DidMount extends Component {
    constructor(){
        super()
        console.log("Constructor")
    }
    componentDidMount(){
        console.log("Component Did mount")
    }
  render() {
    return (
      <div>DidMount</div>
    )
  }
}
