import Choice, { IChoice } from "./Choice";
import { IDecisionProps } from "./types";
import "./styles.css";

const Decision = ({ text, choices }: IDecisionProps) => {
  return (
    <div id="current-decision" className="lesser-border hidden">
      <h2>{text}</h2>
      {choices.map((choice: IChoice) => (
        <Choice {...choice} />
      ))}
    </div>
  );
};

export default Decision;
