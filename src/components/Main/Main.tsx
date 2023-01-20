import { useEffect, useState } from "react";
import { find } from "lodash/fp";

import storyNodes from "@/data/storyNodes.json";

import Timeline, { TimelineItemDefinition } from "@/components/Timeline";
import Decision, { IDecision, IChoice } from "@/components/Decision";
import { IStoryNode } from "./types";

const Main = () => {
  const [storyNode, setStoryNode] = useState<IStoryNode>(
    storyNodes[0] as IStoryNode
  );
  const [timelineItems, setTimelineItems] = useState<TimelineItemDefinition[]>(
    []
  );
  const [currentDecision, setCurrentDecision] = useState<
    undefined | IDecision
  >();

  useEffect(() => {
    const { 
      id, 
      text, 
      type, 
      choices, 
      soundId 
    } = storyNode;

    if (type === "decision") {
      setCurrentDecision({
        text: text,
        choices: choices as IChoice[],
      });
    } else {
      let newItem: TimelineItemDefinition;
      switch (type) {
        case "chapter":
          newItem = {
            id,
            text,
            classes: ["chapter", "fade-in-left"],
            soundEffect: {
              name: "boom",
              volume: 0.3,
            },
          };
          break;
        case "narration":
          newItem = {
            id,
            text,
            classes: ["naration", "fade-in-down"],
            soundEffect: {
              name: "whispers",
            },
          };
          break;
        case "scripture":
          newItem = {
            id,
            text,
            classes: ["scripture", "fade-in"],
            soundEffect: {
              id: soundId,
            },
          };
          break;
        default:
          console.error(`Cannot read type: ${type}`);
          break;
      }

      setTimelineItems((oldItems) => [...oldItems, newItem]);
      setCurrentDecision(undefined);
    }
  }, [storyNode]);

  const handleNextNode = () => {
    const newStoryNode = find(
      { id: storyNode.nextId ?? storyNode.id + 1 },
      storyNodes
    );
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
