import React, { useState } from 'react';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button>Change!</button>
//       </div>
//     );
//   }
// }

function App() {
  // whatever i put inside of the useState() function is going to be the initial value of my state
  // just like this.setState, using hooks, we recieve out own function that we can call whenever we want and we can provide it a new value and it will change state
  // setCount is a function that is available to me to make a change whenever I need to make a change
  // just like this.setState my setCount function that can change state can either receive a replacement version of state or I can provide it a function that will receive the previous version of my state
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState('Yes');

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function toggleAnswer() {
    setAnswer((prevState) => (prevState === 'Yes' ? 'No' : 'Yes'));
  }

  return (
    <div>
      <h1>{count}</h1>
      <h2>Answer is: {answer}</h2>
      {/* onClick is receiving an event*/}
      {/* what i provide to setCount it will be the new version of state */}
      {/* <button onClick={() => setCount(count + 1)}>Change!</button> */}
      {/* <button onClick={() => setCount((prevCount) => prevCount + 1)}> */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={toggleAnswer}>change answer</button>
    </div>
  );
}

export default App;
