import React from 'react';
import { useDispatch } from 'react-redux';

const Child2 = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const inputValue = event.target.value;
    dispatch({ type: 'UPDATE_INPUT', payload: inputValue });
  };

  return (
    <div>
      <h3>Input Component</h3>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Child2;

