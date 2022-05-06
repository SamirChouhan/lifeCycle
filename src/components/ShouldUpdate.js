import React, { Component } from 'react'
import ChildShouldUpdate from '../ChildComponents/ChildShouldUpdate'
export default class ShouldUpdate extends Component {
    constructor(){
        super();
        this.state={
          data:0
        };
      };
  render() {
    return (
      <div>
          <ChildShouldUpdate/>
      </div>
    )
  }
}
