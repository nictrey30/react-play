import React from 'react';

function Header(props) {
  return (
    <div className='meme'>
      <h2>{props.memeData.name}</h2>
      <img
        src={props.memeData.url}
        alt=''
        width={props.memeData.width}
        height={props.memeData.height}
      />
    </div>
  );
}

export default Header;
