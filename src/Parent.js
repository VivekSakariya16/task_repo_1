import React from 'react';
import Child1 from './Child2';
import Child2 from './Child1';

const ComponentA = () => {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child1 />
      <Child2 />
    </div>
  );
};

export default ComponentA;
