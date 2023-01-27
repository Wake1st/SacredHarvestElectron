import * as React from 'react';

import useAnimate from '@/hooks/useAnimate';

import ring from '@/assets/audio/wav/Ring.wav';

import type { IProgressButtonProps } from './types';
import './styles.css';

const ProgressButton = ({ show, onClick }: IProgressButtonProps) => {
  const [animations] = useAnimate(
    show,
    ['fade-in-up'],
    ['fade-out-down'],
  );

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        id="progress-story"
        className={`lesser-border col-md ${animations}`}
        onClick={onClick}
      >
        <h2>
          Next
        </h2>
      </div>
      <audio autoPlay src={ring}>
        <track kind="captions" src="" />
      </audio>
    </>
  );
};

export default ProgressButton;
