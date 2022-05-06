import React, { Component } from 'react'
import ChildgetSnap from '../ChildComponents/ChildgetSnap'

export default class GetSnapShort extends Component {
  constructor(){
    super();
    this.state={
      data:0
    };
  };
  render() {
    return (
      <div>
         <ChildgetSnap /> {/*data={this.state.data} */}
      </div>
    )
  }
}
