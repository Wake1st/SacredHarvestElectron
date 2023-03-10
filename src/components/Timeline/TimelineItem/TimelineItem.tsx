import React from 'react';

import type { ITimelineItemProps } from './types';
import './styles.css';
import Chapter from './Chapter';
import Naration from './Naration';
import Scripture from './Scripture';

const StoryNode = ({
  soundId,
  type,
  text,
}: ITimelineItemProps) => {
  switch (type) {
    case 'chapter':
      return <Chapter text={text} />;
    case 'narration':
      return <Naration text={text} />;
    case 'scripture':
      return <Scripture text={text} soundId={soundId!} />;
    default:
      // eslint-disable-next-line no-console -- it's here for debuggins
      console.error(`Cannot read type: ${type}`);
      return <div>{text}</div>;
  }
};

export default StoryNode;
