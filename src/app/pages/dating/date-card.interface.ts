export enum MatchStatusEnum {
  Matched = 'matched',
  Unmatched = 'unmatched',
}

export type MatchStatus = MatchStatusEnum | 'matched' | 'unmatched';

export type Gender = 'M' | 'F';

export interface DateCard {
  id: string,
  name: string,
  age: number,
  gender: Gender,
  img: string,
  description: string,
}
