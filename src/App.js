import './App.css';
import React from 'react';
import StateTest from './StateTest';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      openState : true
    }

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState(state => ({
      openState: !this.state.openState
    }));
    console.log('change state ', this.state.openState);
  }

  render() {
    return (
      <div>
        <h1> Welcome to JavaTpoint!! </h1>
        <button onClick={this.toggleState}>Toggle State</button>
        <StateTest data={this.state.openState}/>
      </div>
    );
  }
}

App.defaultProps = {  
  name: "JavaTpoint"  
} 

export default App;
