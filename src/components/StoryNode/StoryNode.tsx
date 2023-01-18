import * as React from "react";
import { IStoryNodeProps } from "./types";

const StoryNode: React.FC<IStoryNodeProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default StoryNode;
