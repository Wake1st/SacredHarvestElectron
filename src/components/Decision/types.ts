import { IChoice } from "./Choice";

export interface IDecision {
  text: string;
  choices: IChoice[];
}

export interface IDecisionProps extends IDecision {}
