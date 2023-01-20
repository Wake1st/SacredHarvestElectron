import TimelineItem, { ITimelineItemData } from "./TimelineItem";
import { ITimelineProps } from "./types";
import "./styles.css";

const Timeline = ({ timelineItems }: ITimelineProps) => {
  return (
    <div id="timeline" className="greater-border">
      <h1>Sacred Harvest</h1>
      <div id="timeline-items">
        {timelineItems.map((item: ITimelineItemData) => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
