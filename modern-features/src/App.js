import React, { Component } from 'react';

class App extends Component {
  // using class properties outside a constructor, We remove the need for a constructor and avoid manually binding the handler.
  state = {
    firstName: ''
  };
  // constructor() {
  //   super();
  //   this.state = {
  //     firstName: ''
  //   };
  //   // this.handleChange = this.handleChange.bind(this);
  // }

  // using arrow functions uses the this in the surrounding env, arrows prevent this bugs, so i no longer have to bind my methods in the constructor anymore
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <main>
        <form action=''>
          <label htmlFor='firstName'>First Name</label>
          <br />
          <input
            type='text'
            name='firstName'
            id='firstName'
            placeholder='First Name'
            onChange={this.handleChange}
            value={this.state.firstName}
          />
        </form>
        <h1>{this.state.firstName}</h1>
      </main>
    );
  }
}

export default App;
