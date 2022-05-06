import React, { Component } from 'react'

export default class ChildgetSnap extends Component {
    constructor(){
        super()
        this.state={
            currentValue:0
        };
    }
    componentDidUpdate(props, state){
        console.log("Component Did Update", props,state);
    }
    
    getSnapshotBeforeUpdate(preProps, preState){
        // console.log(preProps);
        return preState.currentValue * 10
    }
  render() {
    return (
      <div>
          <h2>{this.state.currentValue}</h2>
          <button onClick={()=>this.setState({currentValue:this.state.currentValue+1})}>Update State</button>
      </div>
    )
  }
}
