import React, { Component } from 'react'
import Child from '../ChildComponents/Child'

export default class WillUnmount extends Component {
    constructor(){
        super();
        this.state={
            show:false
        }
    }
  render() {
    return (
      <div>
          {this.state.show ? (<Child/>): null}
          <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child</button>
      </div>
    )
  }
}
