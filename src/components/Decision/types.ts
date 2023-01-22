import type { IChoice, IOnChoiceSelection } from './Choice';

export interface IDecision {
  text: string;
  choices: IChoice[];
}

export interface IDecisionProps extends IDecision, IOnChoiceSelection {}
