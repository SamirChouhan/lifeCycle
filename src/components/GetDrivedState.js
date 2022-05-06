import React, { Component } from 'react'
import GetChildProps from '../ChildComponents/GetChildProps';

export default class GetDrivedState extends Component {
    constructor(){
        super();
        this.state={
            data:0
        }
    }
  render() {
    return (
      <div>
          <h2>Props State Update: {this.state.data}</h2>
          <GetChildProps data={this.state.data}/>
          <button onClick={()=>{this.setState({data:this.state.data+1})}}>Make++</button>
      </div>
    )
  }
}
