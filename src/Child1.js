import React from 'react';
import { useSelector } from 'react-redux';

const Child1 = () => {
  const inputValue = useSelector((state) => state.inputValue);

  return (
    <div>
      <h3>Output Component</h3>
      <p>Value from Redux Store: {inputValue}</p>
    </div>
  );
};

export default Child1;