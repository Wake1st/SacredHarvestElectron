import React from 'react';

import type { IChoiceProps } from './types';
import './styles.css';

const Choice = ({
  name,
  summary,
  nextId,
  onClick,
}: IChoiceProps) => (
  <div
    onClick={(e) => onClick(e, nextId)}
    role="button"
    tabIndex={0}
    className="choice-container"
  >
    <h4>{name}</h4>
    <p>{summary}</p>
  </div>
);

export default Choice;
