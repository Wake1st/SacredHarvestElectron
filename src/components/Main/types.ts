import type { IChoice } from '../Decision';

export type StoryNodeType =
  | 'chapter'
  | 'narration'
  | 'scripture'
  | 'decision'
  | 'reset';

export interface IStoryNode {
  id: number;
  text: string;
  nextId?: number;
  soundId?: number;
  wait: number;
  type: StoryNodeType;
  choices?: IChoice[];
}
