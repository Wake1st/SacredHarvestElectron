export interface ITimelineItemData {
  id: number;
  text: string;
}

export interface ISoundEffect {
  id?: number;
  name?: string;
  volume?: number;
}

export interface ITimelineItemStyle {
  classes: string[];
  soundEffect: ISoundEffect;
}

export interface ITimelineItemProps extends ITimelineItemData {}

export type TimelineItemDefinition = ITimelineItemData & ITimelineItemStyle;
