import { IChoice } from "../Decision";
import { ITimelineItemData } from "../Timeline";

export type StoryNodeType =
  | "chapter"
  | "narration"
  | "scripture"
  | "decision"
  | "reset";

export interface IStoryNode extends ITimelineItemData {
  nextId?: number;
  soundId?: number;
  wait: number;
  type: StoryNodeType;
  choices?: IChoice[];
}
