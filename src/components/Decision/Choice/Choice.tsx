import * as React from "react";
import { IChoiceProps } from "./types";

const Choice: React.FunctionComponent<IChoiceProps> = ({ name }) => {
  return <>{name}</>;
};

export default Choice;
