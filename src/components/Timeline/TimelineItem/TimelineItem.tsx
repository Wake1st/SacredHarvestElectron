import * as React from "react";
import { ITimelineItemProps } from "./types";

const StoryNode = ({ text }: ITimelineItemProps) => {
  return <div>{text}</div>;
};

export default StoryNode;
