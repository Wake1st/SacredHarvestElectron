import React, { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { find } from 'lodash/fp';

import storyNodes from '@/data/storyNodes.json';

import Timeline from '@/components/Timeline';
import type { TimelineItemDefinition } from '@/components/Timeline';
import ProgressButton from '@/components/ProgressButton';
import Decision from '@/components/Decision';
import type { IDecision, IChoice } from '@/components/Decision';

import type { IStoryNode } from './types';
import './styles.css';
import useShowButton from './_useShowButton';
import ScrollToBottom from '../ScrollToBottom';

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
      id,
      text,
      type,
      choices,
      soundId,
    } = storyNode;

    if (type === 'decision') {
      setCurrentDecision({
        text,
        choices: choices as IChoice[],
      });
    } else {
      let newItem: TimelineItemDefinition;
      switch (type) {
        case 'chapter':
          newItem = {
            id,
            text,
            classes: ['chapter', 'fade-in-left'],
            soundEffect: {
              name: 'boom',
              volume: 0.3,
            },
          };
          break;
        case 'narration':
          newItem = {
            id,
            text,
            classes: ['naration', 'fade-in-down'],
            soundEffect: {
              name: 'whispers',
            },
          };
          break;
        case 'scripture':
          newItem = {
            id,
            text,
            classes: ['scripture', 'fade-in'],
            soundEffect: {
              id: soundId,
            },
          };
          break;
        default:
          // eslint-disable-next-line no-console -- it's here for debuggins
          console.error(`Cannot read type: ${type}`);
          break;
      }

      setTimelineItems((oldItems) => [
        ...oldItems,
        newItem,
      ]);

      setCurrentDecision(undefined);
    }
  }, [storyNode]);

  const [showButton] = useShowButton(!!currentDecision);

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

      <ProgressButton
        show={showButton}
        onClick={handleNextNode}
      />

      {currentDecision && (
        <Decision
          onClick={handleChoice}
          {...currentDecision}
        />
      )}

      <ScrollToBottom
        text={storyNode?.text ?? currentDecision?.text!}
      />
    </main>
  );
};

export default Main;
