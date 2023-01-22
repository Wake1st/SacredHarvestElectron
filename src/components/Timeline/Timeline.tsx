import React from 'react';

import type { ITimelineItemData } from './TimelineItem';
import TimelineItem from './TimelineItem';
import type { ITimelineProps } from './types';
import './styles.css';

const Timeline = ({ timelineItems }: ITimelineProps) => (
  <div id="timeline" className="greater-border col-md">
    <h1>Sacred Harvest</h1>
    <div id="timeline-items">
      {timelineItems.map((item: ITimelineItemData) => (
        <TimelineItem key={item.id} {...item} />
      ))}
    </div>
  </div>
);

export default Timeline;
