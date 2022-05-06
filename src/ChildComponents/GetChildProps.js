import React, { Component } from 'react'

export default class GetChildProps extends Component {
    constructor(){
        super();
        this.state={
            currentValue:0
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log("Hooks",props, state);
        return {
           currentValue: props.data * 10
        };
    }
  render() {
    console.log("render");
    return (
      <div>
          <h2>Current Value: {this.state.currentValue}</h2>
      </div>
    )
  }
}
