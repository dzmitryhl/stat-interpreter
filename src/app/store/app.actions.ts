import { Action } from '@ngrx/store';

export const CHANGE_SWITCHER_STATE = 'CHANGE_SWITCHER_STATE';

export class ChangeSwitcherState implements Action {
  readonly type = CHANGE_SWITCHER_STATE;

  constructor(public payload: boolean) {}
}

export type AppActions =
  ChangeSwitcherState;
