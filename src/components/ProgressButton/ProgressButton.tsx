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
  );
};

export default ProgressButton;
