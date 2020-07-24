import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    // every time we usa a method that uses a setState we need to bind it to our class first, so it gets back the correct context when it is called in the handler
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDouble = this.handleDouble.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  // i can pass to setState a new version of state as an object...or i can pass it a functon that takes as an argument the previous state
  handleIncrement() {
    // prevState represents the old version of state, and that is an object
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleDouble() {
    this.setState((prevState) => {
      return {
        count: prevState.count * 2
      };
    });
  }
  handleReset() {
    this.setState({
      count: 0
    });
  }
  render() {
    return (
      <div>
        <h3>count: {this.state.count}</h3>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDouble}>double</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

export default App;
