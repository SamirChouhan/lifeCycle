import './App.css';
import React from 'react'
import Nav from './components/Nav'
import DidMount from './components/DidMount';
import WillUnmount from './components/WillUnmount';
import DidUpdate from './components/DidUpdate';
import GetDrivedState from './components/GetDrivedState';
import GetSnapShort from './components/GetSnapShort';
import ShouldUpdate from './components/ShouldUpdate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
    console.log("Constructor")
  }
  componentDidMount() {
    console.log("ComponentDidMount");
  }
  render() {
    return (
      <>
        <h1>Life Cycle Methods</h1>
        {
          this.state.show ? <Nav /> : null
        }
        <button onClick={() => { this.setState({ show: !this.state.show }) }}>Click</button>
        <hr></hr>
        <h1>Component Did Mount</h1>
        <DidMount />
        <hr></hr>
        <h1>Component Will Unmount</h1>
        <WillUnmount />
        <hr></hr>
        <h1>Component Will Update</h1>
        <DidUpdate/>
        <hr></hr>
        <h1>Get derived state from props</h1>
        <GetDrivedState/>
        <hr></hr>
        <h1>Get snaps short before update</h1>
        <GetSnapShort/>
        <hr></hr>
        <h1>Component should update</h1>
        <ShouldUpdate />
      </>
    )
  }
}

export default App;
