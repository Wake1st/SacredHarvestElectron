import { useEffect, useState } from "react";
import { find } from "lodash/fp";

import storyNodes from "@/data/storyNodes.json";

import Timeline, { ITimelineItem } from "@/components/Timeline";
import Decision, { IDecision, IChoice } from "@/components/Decision";
import { IStoryNode } from "./types";

const Main = () => {
  const [storyNode, setStoryNode] = useState<IStoryNode>(
    storyNodes[0] as IStoryNode
  );
  const [timelineItems, setTimelineItems] = useState<ITimelineItem[]>([]);
  const [currentDecision, setCurrentDecision] = useState<
    undefined | IDecision
  >();

  useEffect(() => {
    const { id, text, type, choices } = storyNode;

    if (type === "decision") {
      setCurrentDecision({
        text: text,
        choices: choices as IChoice[],
      });
    } else {
      const newItem: ITimelineItem = { text: text, id: id };
      setTimelineItems((oldItems) => [...oldItems, newItem]);
      setCurrentDecision(undefined);
    }
  }, [storyNode]);

  const handleNextNode = () => {
    const newStoryNode = find(
      { id: storyNode.nextId ?? storyNode.id + 1 },
      storyNodes
    );
    console.log(newStoryNode);
    setStoryNode(newStoryNode as IStoryNode);
  };

  return (
    <main>
      <Timeline timelineItems={timelineItems} />

      <button onClick={handleNextNode}>Next</button>

      {currentDecision && <Decision {...currentDecision} />}
    </main>
  );
};

export default Main;
