import React from 'react';

function LogButton(props) {
  return (
    <div>
      <button
        onClick={(e) => {
          props.callback();
        }}
      >
        {props.isLoggedIn ? 'log out' : 'log in'}
      </button>
    </div>
  );
}

export default LogButton;
