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
    this.setState({
      data: data,
      completed: true
    });
    if (this.state.completed) {
      return 'mere';
    }
    return 'pere';
  }
  render() {
    return (
      <div>
        {this.state.data
          ? Object.entries(this.state.data).map(([key, value]) => {
              return (
                <li>
                  {key}: {value.toString()}
                </li>
              );
            })
          : 'loading...'}
      </div>
    );
  }
}

export default App;
