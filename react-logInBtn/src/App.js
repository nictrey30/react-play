import React from 'react';
import LogButton from './LogButton';
/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) =>
      prevState.isLoggedIn ? { isLoggedIn: false } : { isLoggedIn: true }
    );
  }
  render() {
    return (
      <div>
        <h2>
          {this.state.isLoggedIn ? 'user is logged in' : 'user is logged out'}
        </h2>
        <LogButton
          isLoggedIn={this.state.isLoggedIn}
          callback={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
