import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      isFriendly: true,
      gender: '',
      favColor: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    // type and checked is also a property that we can pull from event.target
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({
          // target represents the element in which the event was fired
          [name]: value
        });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={this.state.firstName}
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={this.state.lastName}
          onChange={this.handleInputChange}
        />
        {/*
        Other useful form elements:
         *  <textarea /> element - in react textarea is a self-closing element
         *  <input type="checkbox" />
         *  <input type="radio" />
         *  <select> and <option> elements 
         */}
        <textarea value={this.state.text} onChange={this.handleInputChange} />
        <br />
        {/* checkboxes */}
        <label htmlFor='isFriendly'>is friendly</label>
        <input
          type='checkbox'
          name='isFriendly'
          id='isFriendly'
          checked={this.state.isFriendly}
          onChange={this.handleInputChange}
        />
        <br />
        {/* radio buttons */}
        <label htmlFor='male'>Male</label>
        <input
          type='radio'
          name='gender'
          value='male'
          id='male'
          checked={this.state.gender === 'male'}
          onChange={this.handleInputChange}
        />
        <label htmlFor='female'>Female</label>
        <input
          type='radio'
          name='gender'
          value='female'
          id='female'
          checked={this.state.gender === 'female'}
          onChange={this.handleInputChange}
        />
        <br />
        {/* select box */}
        <label htmlFor='favColor'>Favourite Color: </label>
        <select
          name='favColor'
          id='favColor'
          value={this.state.favColor}
          onChange={this.handleInputChange}
        >
          <option value='blue'>blue</option>
          <option value='red'>red</option>
          <option value='green'>green</option>
          <option value='yellow'>yellow</option>
          <option value='purple'>purple</option>
        </select>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>{this.state.gender ? `You are a ${this.state.gender}` : null}</h2>
        <h2>
          {this.state.favColor
            ? `Your favourite color is ${this.state.favColor}`
            : null}
        </h2>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
