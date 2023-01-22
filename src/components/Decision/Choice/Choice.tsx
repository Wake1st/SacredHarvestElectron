import React from 'react';

import type { IChoiceProps } from './types';
import './styles.css';

const Choice = ({ name, summary }: IChoiceProps) => (
  <div className="choice-container">
    <h4>{name}</h4>
    <p>{summary}</p>
  </div>
);

export default Choice;
