import React from 'react';

import type { ITimelineItemProps } from './types';
import './styles.css';

const StoryNode = ({
  text,
}: ITimelineItemProps) => <div>{text}</div>;

export default StoryNode;
