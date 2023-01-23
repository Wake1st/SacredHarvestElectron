import * as React from 'react';

import type { IScriptureProps } from './types';
import './styles.css';

// soundEffect: {
//   id: soundId,
// },

const Scripture = ({ text }: IScriptureProps) => (
  <div className="scripture fade-in">
    {text}
  </div>
);

export default Scripture;
