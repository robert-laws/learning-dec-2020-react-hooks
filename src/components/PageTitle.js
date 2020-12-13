import React, { useState, useEffect } from 'react';

const PageTitle = () => {
  const [name, setName] = useState('Bob');

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  }, [name]);

  return (
    <section>
      <p>Congrats {name}!</p>
      <button onClick={() => setName('Hal')}>Change Winner</button>
    </section>
  );
};

export default PageTitle;
