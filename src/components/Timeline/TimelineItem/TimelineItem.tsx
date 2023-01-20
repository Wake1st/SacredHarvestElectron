import { ITimelineItemProps } from "./types";
import "./styles.css";

const StoryNode = ({ text }: ITimelineItemProps) => {
  return <div>{text}</div>;
};

export default StoryNode;
