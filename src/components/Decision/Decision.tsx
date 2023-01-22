import React, { useState, useEffect } from 'react';

import type { IChoice } from './Choice';
import Choice from './Choice';
import type { IDecisionProps } from './types';
import './styles.css';

const Decision = ({ text, choices }: IDecisionProps) => {
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    setAnimation(text ? 'fade-in-up' : 'fade-out-down');
  }, [text]);

  console.log('decision: ', text);
  return (
    <div id="current-decision" className={`lesser-border ${animation}`}>
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
