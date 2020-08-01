import React, { Component } from 'react';
function FormComponent(props) {
  return (
    <main>
      <form>
        <label htmlFor='firstName'>First Name: </label>
        <input
          name='firstName'
          id='firstName'
          placeholder='First Name'
          value={props.data.firstName}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor='lastName'>Last Name: </label>
        <input
          name='lastName'
          id='lastName'
          placeholder='First Name'
          value={props.data.lastName}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor='age'>Age: </label>
        <input
          name='age'
          id='age'
          placeholder='Age'
          type='number'
          value={props.data.age}
          onChange={props.handleChange}
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
          checked={props.data.gender === 'male'}
          onChange={props.handleChange}
        />
        <label htmlFor='female'>female</label>
        <input
          type='radio'
          name='gender'
          id='female'
          value='female'
          checked={props.data.gender === 'female'}
          onChange={props.handleChange}
        />
        <br />
        {/* Create select box for location here */}
        <label htmlFor='location'></label>
        <select
          name='location'
          id='location'
          value={props.data.location}
          onChange={props.handleChange}
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
          checked={props.data.dietaryRestrictions.lapte}
          onChange={props.handleChange}
        />
        <label htmlFor='carne'>carne</label>
        <input
          type='checkbox'
          name='carne'
          id='carne'
          checked={props.data.dietaryRestrictions.carne}
          onChange={props.handleChange}
        />
        <label htmlFor='branza'>branza</label>
        <input
          type='checkbox'
          name='branza'
          id='branza'
          checked={props.data.dietaryRestrictions.branza}
          onChange={props.handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information: </h2>
      <p>
        Your name: {props.data.firstName} {props.data.lastName}
      </p>
      <p>Your age: {props.data.age ? `${props.data.age}` : null}</p>
      <p>Your gender: {props.data.gender ? `${props.data.gender}` : null}</p>
      <p>Your destination: {props.data.location}</p>
      <p>
        Your dietary restrictions:
        {props.data.dietaryRestrictions
          ? Object.entries(props.data.dietaryRestrictions).map(
              ([key, value], index) => {
                return value ? <li key={index}>{key}</li> : null;
              }
            )
          : null}
      </p>
    </main>
  );
}

export default FormComponent;
