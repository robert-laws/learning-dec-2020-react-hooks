import { useState } from 'react';
import './App.scss';

function App() {
  const [check, setCheck] = useState(false);

  return (
    <div className='App'>
      <h1>Checkbox: {check.toString()}</h1>
      <hr />
      <input
        type='checkbox'
        value={check}
        onChange={() => setCheck((prevCheck) => !prevCheck)}
      />
    </div>
  );
}

export default App;
