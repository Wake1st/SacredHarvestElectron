import type { IStoryNode } from '@/components/Main/types';

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

// export type TimelineItemDefinition = ITimelineItemData & ITimelineItemStyle;
export type TimelineItemDefinition = IStoryNode;

export interface ITimelineItemProps extends TimelineItemDefinition {}
