import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

function App() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState('Yes');
  const [color, setColor] = useState('');
  // the useEffect() hook is considered a replacement for 3 lifecycle methods: componentDidMount, componentDidUpdate, and componentWillUnmount
  // it's a hook that allows us to produce side effects in our component

  // side effects - anything that reaches outside of a component to do something
  // network request, manual DOM manipulation, event listeners or timeouts and intervals

  // function increment() {
  //   setCount((prevCount) => prevCount + 1);
  // }
  // function decrement() {
  //   setCount((prevCount) => prevCount - 1);
  // }
  function toggleAnswer() {
    setAnswer((prevAnswer) => (prevAnswer === 'Yes' ? 'No' : 'Yes'));
  }

  // every time the component renders, useEffect is called
  // inside of the sec param aka the array, i can specify what variable I want to watch for changes in, and if this variable changes, i will run the effect again

  // if we want useEffect to act like componentWillUnmount, is by returning something from its body -> cleanup function / under the hood when react calls useEffect and that useEffect calls returns a function, it stores that function and right when a component is about to unmount it runs that function so that it can do any type of cleanup that will need to do
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);
  // if i dont't put any variable in that array, it will tell the effect to not run ever again

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <h2>Answer is: {answer}</h2>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
      <button onClick={toggleAnswer}>change answer</button>
    </div>
  );
}

export default App;
