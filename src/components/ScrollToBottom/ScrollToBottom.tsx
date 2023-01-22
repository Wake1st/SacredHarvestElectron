import React, { useRef, useEffect } from 'react';

import type { IScrollToBottomProps } from './types';

const ScrollToBottom = ({
  text,
}: IScrollToBottomProps) => {
  const textEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    textEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => scrollToBottom(), [text]);

  return <div ref={textEndRef} />;
};

export default ScrollToBottom;
