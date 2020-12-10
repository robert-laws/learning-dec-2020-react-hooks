import { useState } from 'react';
import './App.scss';

function App() {
  const [item, setItem] = useState('empty item...');

  return (
    <div className='App'>
      <h1>Your item is: {item}</h1>
      <hr />
      <input type='text' name='item' />
      <button type='button' onClick={() => setItem('New Item')}>
        Click Here
      </button>
    </div>
  );
}

export default App;
