import React, { useRef } from 'react';

const RefExample = () => {
  const sound = useRef();
  const color = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
    sound.current.value = '';
    color.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={sound} type='text' placeholder='sound...' />
      <input ref={color} type='color' />
      <button type='submit'>ADD</button>
    </form>
  );
};

export default RefExample;
