import React, { Component } from 'react';
import FormComponent from './FormComponent';

class Form extends Component {
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
      <FormComponent
        handleChange={this.handleChange}
        data={this.state}
        // {...this.state}
      />
    );
  }
}

export default Form;
