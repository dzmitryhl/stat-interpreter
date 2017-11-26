import { TotalResult } from './../../model/totalResult';
import { Match } from './../../model/match';
import { MatchesActions, SET_MATCHES } from './matches.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    matches: State
}

export interface State {
    totalResult: TotalResult;
}

const initialState: State = {
    totalResult: null
};

export function matchesReducer(state = initialState, action: MatchesActions) {
    switch (action.type) {
        case SET_MATCHES:
            console.log("from set_matches", action.payload);
            return {
                ...state,
                totalResult: action.payload
            };
        }
  }