import React from 'react';

import useAnimate from '@/hooks/useAnimate';

import gong from '@/assets/audio/wav/Gong.wav';

import type { IChoice } from './Choice';
import Choice from './Choice';
import type { IDecisionProps } from './types';
import './styles.css';

const Decision = ({
  text,
  choices,
  onClick,
}: IDecisionProps) => {
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
          <Choice
            key={choice.name}
            onClick={onClick}
            {...choice}
          />
        ))}
      </div>

      <audio autoPlay src={gong}>
        <track kind="captions" src="" />
      </audio>
    </div>
  );
};

export default Decision;
