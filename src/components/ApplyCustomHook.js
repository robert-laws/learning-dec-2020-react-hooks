import React from 'react';
import useInput from './useInput';

const ApplyCustomHook = () => {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input {...titleProps} type='text' placeholder='sound...' />
      <input {...colorProps} type='color' />
      <button type='submit'>ADD</button>
    </form>
  );
};

export default ApplyCustomHook;
