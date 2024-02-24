import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [letter, setLetter] = useState('B');
  const [shape, setShape] = useState<JSX.Element | null>(null);

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

  useEffect(() => {
    const shapes = [
      <circle cx='50' cy='50' r='40' fill='LimeGreen' />,
      <polygon points='50,5 95,25 95,75 50,95 5,75 5,25' fill='RoyalBlue' />,
      <polygon points='50,5 100,100 5,100' fill='Crimson' />,
    ];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    setShape(randomShape);
  }, [letter]);

  return (
    <div className='letter-container'>
      <div className='center shape'>
        <svg height='60vh' width='60vw' viewBox='0 0 100 100'>
          {shape}
        </svg>
      </div>

      <div className='center letter'>{letter}</div>
    </div>
  );
}

export default App;
