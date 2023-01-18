export interface Flock {
  faith: number;
  resolve: number;
  contentment: number;
}

export interface Consequence {
  key: keyof Flock;
  value: number;
}

export interface IChoice {
  nextId: number;
  name: string;
  summary: string;
  consequences?: Consequence[];
}

export interface IChoiceProps extends IChoice {}
