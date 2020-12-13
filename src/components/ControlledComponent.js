import React, { useState } from 'react';

const ControlledComponent = () => {
  const [sound, setSound] = useState('');
  const [color, setColor] = useState('#000000');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${sound} sounds like ${color}`);
    setSound('');
    setColor('#000000');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={sound}
        onChange={(event) => setSound(event.target.value)}
        type='text'
        placeholder='sound...'
      />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        type='color'
      />
      <button type='submit'>ADD</button>
    </form>
  );
};

export default ControlledComponent;
