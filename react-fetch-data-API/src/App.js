import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // componentDidMount is like a hook in our React Component that allows us to run some kind of code immediately after the component first mounts to the DOM
  async componentDidMount() {
    const response = await fetch(
      'https://my-json-server.typicode.com/aman-leap/swapi/people/1'
    );
    const data = await response.json();
    console.log(data);
  }
  render() {
    return <div>Code goes here</div>;
  }
}

export default App;
