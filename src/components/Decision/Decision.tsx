import * as React from "react";

import Choice, { IChoice } from "./Choice";
import { IDecisionProps } from "./types";

const Decision: React.FunctionComponent<IDecisionProps> = ({
  text,
  choices,
}) => {
  return (
    <>
      <h2>{text}</h2>
      {choices.forEach((choice: IChoice) => (
        <Choice {...choice} />
      ))}
    </>
  );
};

export default Decision;
