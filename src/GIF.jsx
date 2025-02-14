import React, { useState } from 'react';
import PIKA from './assets/pikachu.gif';
import './GIF.css';
import { Link } from 'react-router-dom';

export const GIF = () => {
  const [position, setPosition] = useState({});
  const [textIndex, setTextIndex] = useState(0);

  const buttonTexts = [
    "NO",
    "Why?",
    "Don't be rude",
    "WTF",
    "Stop",
    "STOP",
    "Just click on YES"
  ];

  const moveButton = (event) => {
    let attempts = 0;
    let newX, newY;
    const maxAttempts = 10;

    do {
      const maxX = window.innerWidth - 100; // Keep within viewport width
      const maxY = window.innerHeight - 50; // Keep within viewport height
      newX = Math.random() * maxX;
      newY = Math.random() * maxY;
      attempts++;
    } while (
      Math.abs(event.clientX - newX) < 100 &&  // Ensure button moves far enough from cursor
      Math.abs(event.clientY - newY) < 100 &&
      attempts < maxAttempts
    );

    setPosition({ top: `${newY}px`, left: `${newX}px`, position: 'absolute' });

    // Update button text in a loop
    setTextIndex((prevIndex) => (prevIndex + 1) % buttonTexts.length);
  };

  return (
    <div className='GIF'>
      <img src={PIKA} alt="Pikachu" />
      <h1>Will you be my Valentine?</h1>
      <ul>
        <li>
          <Link to="/YES">
            <button style={{ backgroundColor: 'lightgreen' }}>YES</button>
          </Link>
        </li>
        <li>
          <button 
            style={{ backgroundColor: '#FF474C', ...position }} 
            onMouseEnter={moveButton}
            onClick={moveButton}  // Button runs away when clicked
          >
            {buttonTexts[textIndex]}
          </button>
        </li>
      </ul>
    </div>
  );
};
