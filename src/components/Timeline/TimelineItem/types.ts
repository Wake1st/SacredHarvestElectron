export interface ITimelineItem {
  id: number;
  text: string;
}

export interface ITimelineItemProps extends ITimelineItem {}

export type TimelineItemDefinition = ITimelineItem;
