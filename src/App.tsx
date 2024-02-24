import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [letter, setLetter] = useState('B');

  const handleKeyDown: (ev: KeyboardEvent) => any = event => {
    const key = event.key;
    if (/^[a-zA-Z0-9]$/.test(key)) {
      const letter = key.toUpperCase();
      setLetter(letter);
    } else {
      setLetter('-');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='letter-container'>
      <div className='letter'>{letter}</div>
    </div>
  );
}

export default App;
