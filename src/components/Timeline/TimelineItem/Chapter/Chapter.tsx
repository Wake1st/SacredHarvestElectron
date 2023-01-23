import * as React from 'react';

import type { IChapterProps } from './types';
import './styles.css';

// soundEffect: {
//   name: 'boom',
//   volume: 0.3,
// },

const Chapter = ({ text }: IChapterProps) => (
  <h2 className="chapter fade-in-left">
    {text}
  </h2>
);

export default Chapter;
