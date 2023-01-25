import React from 'react';

import whispers1 from '@/assets/audio/wav/Whispers1.wav';
import whispers2 from '@/assets/audio/wav/Whispers2.wav';
import whispers3 from '@/assets/audio/wav/Whispers3.wav';

import type { INarationProps } from './types';
import './styles.css';

const Naration = ({ text }: INarationProps) => (
  <>
    <div className="naration fade-in-down">
      {text}
    </div>
    <audio autoPlay src={whispers1}>
      <track kind="captions" src="" />
    </audio>
    <audio autoPlay src={whispers2}>
      <track kind="captions" src="" />
    </audio>
    <audio autoPlay src={whispers3}>
      <track kind="captions" src="" />
    </audio>
  </>
);

export default Naration;
