import React from 'react';

// import whispers1 from '@/assets/audio/wav/Whispers1.wav';
// import whispers2 from '@/assets/audio/wav/Whispers2.wav';
// import whispers3 from '@/assets/audio/wav/Whispers3.wav';

import type { INarationProps } from './types';
import './styles.css';

const whispers = [
  new Audio('./assets/audio/Whispers1.wav'),
  new Audio('./assets/audio/Whispers2.wav'),
  new Audio('./assets/audio/Whispers3.wav'),
];

const lerp = (value1: number, value2: number, amount: number) => {
  let amt;
  amt = amount < 0 ? 0 : amount;
  amt = amt > 1 ? 1 : amt;
  return value1 + (value2 - value1) * amt;
};

const getRandomInt = (max: number) => Math.ceil(Math.random() * max);

const playWhispers = () => {
  whispers.forEach((whisper) => {
    //  randomly play
    if (getRandomInt(2) % 2 === 0) {
      const audio = whisper;
      audio.volume = lerp(0.6, 0.8, Math.random());
      audio.play();
    }
  });
};

const Naration = ({ text }: INarationProps) => {
  playWhispers();

  return (
    <div className="naration fade-in-down">
      {text}
    </div>
  );
};

export default Naration;
