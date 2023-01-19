import Choice, { IChoice } from "./Choice";
import { IDecisionProps } from "./types";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

const Decision = ({ text, choices }: IDecisionProps) => {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    setAnimation(text ? "fade-in-up" : "fade-out-down");
  }, [text]);

  console.log("decision: ", text);
  return (
    <div id="current-decision" className={`lesser-border ${animation}`}>
      <h2>{text}</h2>
      {choices.map((choice: IChoice) => (
        <Choice key={choice.name} {...choice} />
      ))}
    </div>
  );
};

export default Decision;
