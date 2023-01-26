import React, { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { find } from 'lodash/fp';

import storyNodes from '@/data/storyNodes.json';

import Timeline from '@/components/Timeline';
import type { TimelineItemDefinition } from '@/components/Timeline';
import ProgressButton from '@/components/ProgressButton';
import Decision from '@/components/Decision';
import type { IDecision, IChoice } from '@/components/Decision';
import ScrollToBottom from '@/components/ScrollToBottom';

import type { IStoryNode } from './types';
import './styles.css';

const Main = () => {
  const [storyNode, setStoryNode] = useState<IStoryNode>();
  const [
    timelineItems,
    setTimelineItems,
  ] = useState<TimelineItemDefinition[]>([]);
  const [
    currentDecision,
    setCurrentDecision,
  ] = useState<undefined | IDecision>();

  useEffect(() => {
    if (!storyNode) {
      return;
    }

    const {
      text,
      type,
      choices,
    } = storyNode;

    if (type === 'decision') {
      setCurrentDecision({
        text,
        choices: choices as IChoice[],
      });
    } else {
      setTimelineItems((oldItems) => [
        ...oldItems,
        storyNode,
      ]);

      setCurrentDecision(undefined);
    }
  }, [storyNode]);

  const handleNextNode = () => {
    const newStoryNode = find(
      {
        id: storyNode
          ? storyNode.nextId ?? storyNode.id + 1
          : 0,
      },
      storyNodes,
    );
    setStoryNode(newStoryNode as IStoryNode);
  };

  const handleChoice = (_: MouseEvent, nextId: number) => {
    const newStoryNode = find(
      { id: nextId ?? 0 },
      storyNodes,
    );
    setStoryNode(newStoryNode as IStoryNode);
  };

  return (
    <main>
      <Timeline timelineItems={timelineItems} />

      {currentDecision ? (
        <Decision
          onClick={handleChoice}
          {...currentDecision}
        />
      ) : (
        <ProgressButton
          show={!currentDecision}
          onClick={handleNextNode}
        />
      )}

      <ScrollToBottom
        text={storyNode?.text ?? currentDecision?.text!}
      />
    </main>
  );
};

export default Main;
