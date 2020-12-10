import { useState, useEffect } from 'react';
import './App.scss';
import StarRating from './components/StarRating';

function App() {
  const [check, setCheck] = useState(false);
  const [name, setName] = useState('Bob');

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  }, [name]);

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
      <hr />
      <section>
        <p>Congrats {name}!</p>
        <button onClick={() => setName('Hal')}>Change Winner</button>
      </section>
    </div>
  );
}

export default App;
