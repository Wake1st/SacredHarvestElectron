import * as React from 'react';

import boom from '@/assets/audio/wav/Boom.wav';

import type { IChapterProps } from './types';
import './styles.css';

const Chapter = ({ text }: IChapterProps) => (
  <>
    <h2 className="chapter fade-in-left">
      {text}
    </h2>
    <audio autoPlay src={boom}>
      <track kind="captions" src="" />
    </audio>
  </>
);
export default Chapter;
