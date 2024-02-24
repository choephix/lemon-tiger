import React, { useState, useEffect } from 'react';

import './App.css';

function getRandomEmoji(): string {
  const emojis = [
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    '😂',
    '🤣',
    '😊',
    '😇',
    '🙂',
    '🙃',
    '😉',
    '😌',
    '😍',
    '🥰',
    '😘',
    '😗',
    '😙',
    '😚',
    '😋',
    '😛',
    '😝',
    '😜',
    '🤪',
    '🤨',
    '🧐',
    '🤓',
    '😎',
    '⭐',
    '🤩',
    '🥳',
    '😏',
    '😒',
    '😞',
    '😔',
    '😟',
    '😕',
    '🙁',
    '☹️',
    '😣',
    '😖',
    '😫',
    '😩',
    '🥺',
    '😢',
    '😭',
    '😤',
    '😠',
    '😡',
  ];

  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

function getRandomAnimalEmoji(): string {
  const animalEmojis = [
    '🐶',
    '🐱',
    '🐭',
    '🐹',
    '🐰',
    '🦊',
    '🐻',
    '🐼',
    '🐻‍❄️',
    '🐨',
    '🐯',
    '🦁',
    '🐮',
    '🐷',
    '🐽',
    '🐸',
    '🐵',
    '🙈',
    '🙉',
    '🙊',
    '🐒',
    '🐔',
    '🐧',
    '🐦',
    '🐤',
    '🐣',
    '🐥',
    '🦆',
    '🦅',
    '🦉',
    '🦇',
    '🐺',
    '🐗',
    '🐴',
    '🦄',
    '🐝',
    '🐬',
    '🐛',
    '🦋',
    '🐌',
    '🐞',
    '🐜',
    '🧙‍♂️',
    '🖐',
    '🐓',
    '🦟',
    '🦗',
    '🕷️',
    '🕸️',
    '🦂',
  ];

  const randomIndex = Math.floor(Math.random() * animalEmojis.length);
  return animalEmojis[randomIndex];
}

const shapes = [
  <circle cx='50' cy='50' r='40' fill='LimeGreen' />,
  <polygon points='50,5 95,25 95,75 50,95 5,75 5,25' fill='RoyalBlue' />,
  <polygon points='50,5 100,100 5,100' fill='Crimson' />,
];

function App() {
  const [letter, setLetter] = useState('B');

  const handleKeyDown: (ev: KeyboardEvent) => any = event => {
    const key = event.key;
    if (/^[a-zA-Z0-9]$/.test(key)) {
      const letter = key.toUpperCase();
      setLetter(letter);
    } else if (key === ' ') {
      const symbol = ' ';
      setLetter(symbol);
    } else {
      const symbol = getRandomAnimalEmoji();
      setLetter(symbol);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const shape = shapes[Math.floor(Math.random() * shapes.length)];

  const getRandomPercentage = () => {
    return `${Math.random() * 20 + 40}%`;
  };

  return (
    <div className='letter-container'>
      <div className='center shape'>
        <svg height='60vh' width='60vw' viewBox='0 0 100 100'>
          {shape}
        </svg>
      </div>

      <div
        className='center letter'
        style={{
          position: 'absolute',
          top: getRandomPercentage(),
          left: getRandomPercentage(),
        }}
      >
        {letter}
      </div>
    </div>
  );
}

export default App;
