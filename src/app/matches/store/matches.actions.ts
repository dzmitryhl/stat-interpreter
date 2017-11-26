import { TotalResult } from './../../model/totalResult';
import { Action } from '@ngrx/store';

export const SET_MATCHES = 'SET_MATCHES';
export const APPLY_STRATEGY = 'APPLY_STRATEGY';

export class ApplyStrategy implements Action {
  readonly type = APPLY_STRATEGY;

  constructor(public payload: any) {}
}

export class SetMatches implements Action {
  readonly type = SET_MATCHES;

  constructor(public payload: TotalResult) {}
}


export type MatchesActions =
  SetMatches |
  ApplyStrategy;
