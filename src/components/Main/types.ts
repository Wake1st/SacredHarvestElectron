import { IChoice } from "../Decision";
import { ITimelineItem } from "../Timeline";

export type StoryNodeType =
  | "chapter"
  | "narration"
  | "scripture"
  | "decision"
  | "reset";

export interface IStoryNode extends ITimelineItem {
  nextId?: number;
  soundId?: number;
  wait: number;
  type: StoryNodeType;
  choices?: IChoice[];
}
