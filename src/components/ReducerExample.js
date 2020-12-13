import React, { useReducer } from 'react';

const ReducerExample = () => {
  const [number, setNumber] = useReducer((number, newNumber) => {
    return number + newNumber;
  }, 0);

  return (
    <div>
      <h1 onClick={() => setNumber(1)}>{number}</h1>
    </div>
  );
};

export default ReducerExample;
