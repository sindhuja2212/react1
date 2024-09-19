import React, { useState, useMemo } from 'react';

const Usememo = () => {
  const [counter, setCounter] = useState(1);

  let num1 = 2;
  let num2 = 0;

  let sum = useMemo(() => {
    console.log('Calculating sum...');
    return num1 + num2;
  }, [num1, num2]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Update State</button>
      <h1>Counter: {counter}</h1>
      <h2>Sum: {sum}</h2>
    </div>
  );
};

export default Usememo;