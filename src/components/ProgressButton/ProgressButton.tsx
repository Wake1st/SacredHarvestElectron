import * as React from 'react';

import useAnimate from '@/hooks/useAnimate';

import type { IProgressButtonProps } from './types';
import './styles.css';

const ProgressButton = ({ show, onClick }: IProgressButtonProps) => {
  const [animations] = useAnimate(
    show,
    ['fade-in-up'],
    ['fade-out-down'],
  );

  return (
    <button
      type="button"
      id="progress-story"
      className={`lesser-border col-md ${animations}`}
      onClick={onClick}
    >
      <h2>
        Next
      </h2>
    </button>
  );
};

export default ProgressButton;
