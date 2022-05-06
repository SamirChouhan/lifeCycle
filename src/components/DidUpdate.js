import React, { Component } from 'react'

export default class DidUpdate extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    componentDidUpdate(pP, pS, sS){
        console.log("Component Did update",pS);  //pS tell the privious state of counter
        // console.log("Component Did update",pP);     //pP tell the privious props of counter
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Update Counter {this.state.counter}</button>
            </div>
        )
    }
}
