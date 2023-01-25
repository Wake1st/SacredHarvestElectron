import * as React from 'react';

import chants from '@/data/chants.json';

import type { IChants, IScriptureProps } from './types';
import './styles.css';

const Scripture = ({ text, nextId }: IScriptureProps) => {
  const chant = chants.find(({ id }: IChants) => id === nextId);

  return (
    <>
      <div className="scripture fade-in">
        {text}
      </div>
      <audio autoPlay src={`@/assets/audio/wav/chants/${chant?.file}`}>
        <track kind="captions" src="" />
      </audio>
    </>
  );
};

export default Scripture;
