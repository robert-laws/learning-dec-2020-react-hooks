import { useState } from 'react';
import './App.scss';
import StarRating from './components/StarRating';

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
      <hr />
      <StarRating starCount={8} />
      <hr />
      <StarRating />
    </div>
  );
}

export default App;
