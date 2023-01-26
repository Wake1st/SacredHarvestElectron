import * as React from 'react';

import type { IScriptureProps } from './types';
import './styles.css';
import useChants from './useChants';

const Scripture = ({ text, soundId }: IScriptureProps) => {
  const chantSound = useChants(soundId);

  return (
    <>
      <div className="scripture fade-in">
        {text}
      </div>
      <audio autoPlay src={chantSound}>
        <track kind="captions" src="" />
      </audio>
    </>
  );
};

export default Scripture;
