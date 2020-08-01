import React, { Component } from 'react';

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      location: '',
      age: '',
      dietaryRestrictions: {
        lapte: false,
        carne: false,
        branza: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, checked, type } = event.target;
    if (type === 'checkbox') {
      this.setState((prevState) => {
        let updatedRestrictions = prevState.dietaryRestrictions;
        updatedRestrictions[name] = checked;
        return {
          ...prevState,
          dietaryRestrictions: updatedRestrictions
        };
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  }
  render() {
    return (
      <main>
        <form>
          <label htmlFor='firstName'>First Name: </label>
          <input
            name='firstName'
            id='firstName'
            placeholder='First Name'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='lastName'>Last Name: </label>
          <input
            name='lastName'
            id='lastName'
            placeholder='First Name'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='age'>Age: </label>
          <input
            name='age'
            id='age'
            placeholder='Age'
            type='number'
            value={this.state.age}
            onChange={this.handleChange}
            min={1}
            max={100}
          />
          <br />
          <label htmlFor='male'>male</label>
          <input
            type='radio'
            name='gender'
            id='male'
            value='male'
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
          />
          <label htmlFor='female'>female</label>
          <input
            type='radio'
            name='gender'
            id='female'
            value='female'
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
          />
          <br />
          {/* Create select box for location here */}
          <label htmlFor='location'></label>
          <select
            name='location'
            id='location'
            value={this.state.location}
            onChange={this.handleChange}
          >
            <option value=''>- Please choose a destination --</option>
            <option value='Bucuresti'>Bucuresti</option>
            <option value='Ploiesti'>Ploiesti</option>
            <option value='Sibiu'>Sibiu</option>
            <option value='Valea Arsa'>Valea Arsa</option>
            <option value='Vama Veche'>Vama Veche</option>
          </select>
          <br />
          {/* Create check boxes for dietary restrictions here */}
          <p>Dietary restrictions</p>
          <label htmlFor='lapte'>lapte</label>
          <input
            type='checkbox'
            name='lapte'
            id='lapte'
            checked={this.state.dietaryRestrictions.lapte}
            onChange={this.handleChange}
          />
          <label htmlFor='carne'>carne</label>
          <input
            type='checkbox'
            name='carne'
            id='carne'
            checked={this.state.dietaryRestrictions.carne}
            onChange={this.handleChange}
          />
          <label htmlFor='branza'>branza</label>
          <input
            type='checkbox'
            name='branza'
            id='branza'
            checked={this.state.dietaryRestrictions.branza}
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information: </h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age ? `${this.state.age}` : null}</p>
        <p>Your gender: {this.state.gender ? `${this.state.gender}` : null}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
          Your dietary restrictions:
          {this.state.dietaryRestrictions
            ? Object.entries(this.state.dietaryRestrictions).map(
                ([key, value], index) => {
                  return value ? <li key={index}>{key}</li> : null;
                }
              )
            : null}
        </p>
      </main>
    );
  }
}

export default App;
