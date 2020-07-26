import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }
  // componentDidMount is like a hook in our React Component that allows us to run some kind of code immediately after the component first mounts to the DOM
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await fetch('https://swapi.dev/api/people/1/?format=json');
    const data = await response.json();
    this.setState({
      loading: false,
      character: data
    });
  }
  render() {
    let count = 1;
    const text = '...api is loading';
    return (
      <div>
        {!this.state.loading
          ? Object.entries(this.state.character).map(([key, value]) => {
              return (
                <li key={count}>
                  {key}: {value.toString()}
                  {(count = Math.ceil(count + Math.random()))}
                </li>
              );
            })
          : text}
      </div>
    );
  }
}

export default App;
