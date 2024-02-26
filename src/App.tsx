import React, { useState, useEffect } from 'react';
import { debounce, throttle } from 'lodash';

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

let lastKeypressTime = 0;
let debouncing = false;

const THRESHOLD_MS = 250;

function App() {
  const [letter, setLetter] = useState('B');

  const updateLetterFromKeyboardKey = (event: KeyboardEvent) => {
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

    debouncing = false;
  };

  const updateLetterFromKeyboardKeyDebounced = debounce(updateLetterFromKeyboardKey, 1200);

  const handleKeyDown: (ev: KeyboardEvent) => any = event => {
    event.preventDefault();

    if (event.key === ' ') {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      }
      return;
    }

    const currentTime = new Date().getTime();
    const deltaTime = currentTime - lastKeypressTime;
    if (deltaTime > THRESHOLD_MS) {
      if (debouncing) {
        return;
      }
      updateLetterFromKeyboardKey(event);
    } else {
      setLetter('');
      updateLetterFromKeyboardKeyDebounced(event);
      debouncing = true;
    }
    lastKeypressTime = currentTime;
  };

  const disableContextMenu = (event: MouseEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', disableContextMenu);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', disableContextMenu);
    };
  }, []);

  const shape = letter ? shapes[Math.floor(Math.random() * shapes.length)] : null;

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
