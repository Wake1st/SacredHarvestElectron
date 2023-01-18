import type { Choice } from "@/components/Decision/Choice";

export type StoryNodeType =
  | "chapter"
  | "narration"
  | "scripture"
  | "decision"
  | "reset";

export interface IStoryNodeProps {
  id: number;
  nextId?: number;
  soundId?: number;
  wait: number;
  type: StoryNodeType;
  text: string;
  choices?: Choice[];
}
