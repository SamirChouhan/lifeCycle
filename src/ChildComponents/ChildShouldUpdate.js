import React, { Component } from 'react'

export default class ChildShouldUpdate extends Component {
    constructor() {
        super();
        this.state = {
            data: 1
        }
    }
    shouldComponentUpdate(prevProps, prevState) {
        console.log(prevProps.data)
        if (prevProps.data === 'test') {
            return true
        }
        else { return false }
    }
    render() {
        console.log("Render")
        return (
            <div>
                <h2>Data: {this.state.data}</h2>
                <button onClick={() => { this.setState({ data: this.state.data + 1 }) }}>Update data</button>
            </div>
        )
    }
}
