import * as React from "react";

interface IStoryNodeProps {
  text: string;
  type: "naration" | "scripture" | "chapter";
}

const StoryNode: React.FC<IStoryNodeProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default StoryNode;
