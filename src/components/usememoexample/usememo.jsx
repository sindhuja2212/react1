import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);


  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 100; i++) {
      num += 1;
    }
    return num;
  };

  
  const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>Expensive Calculation with useMemo</h1>
      <h2>Calculated Value: {calculatedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setToggle(!toggle)}>Toggle State</button>
      <p>Toggle: {toggle.toString()}</p>
    </div>
  );
};

export default ExpensiveCalculation;