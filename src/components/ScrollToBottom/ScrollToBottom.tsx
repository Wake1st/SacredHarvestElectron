import { useRef, useEffect } from "react";

interface IScrollToBottomProps {
  text: string;
}

const ScrollToBottom: React.FunctionComponent<IScrollToBottomProps> = ({
  text,
}) => {
  const textEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    textEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => scrollToBottom(), [text]);

  return <div ref={textEndRef} />;
};

export default ScrollToBottom;
