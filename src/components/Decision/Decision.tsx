import React from 'react';

import useAnimate from '@/hooks/useAnimate';

import type { IChoice } from './Choice';
import Choice from './Choice';
import type { IDecisionProps } from './types';
import './styles.css';

const Decision = ({ text, choices }: IDecisionProps) => {
  const [animations] = useAnimate(
    text,
    ['fade-in-up'],
    ['fade-out-down'],
  );

  return (
    <div
      id="current-decision"
      className={`lesser-border col-lg ${animations}`}
    >
      <h3>{text}</h3>
      <div id="choices">
        {choices.map((choice: IChoice) => (
          <Choice key={choice.name} {...choice} />
        ))}
      </div>
    </div>
  );
};

export default Decision;
