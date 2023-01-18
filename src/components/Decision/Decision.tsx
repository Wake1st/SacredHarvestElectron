import * as React from "react";

import Choice from "./Choice";

interface IDecisionProps {}

const Decision: React.FunctionComponent<IDecisionProps> = (props) => {
  return (
    <>
      <Choice />
    </>
  );
};

export default Decision;
