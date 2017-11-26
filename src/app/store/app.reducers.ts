import { ActionReducerMap } from '@ngrx/store';
import { AppActions, CHANGE_SWITCHER_STATE } from './app.actions';
import * as fromAuth from "../auth/store/auth.reducers";

export interface State {
    switcher: boolean;
}

const initialState: State = {
    switcher: true
};

export function appReducer(state = initialState, action: AppActions) {
    switch(action.type) {
        case CHANGE_SWITCHER_STATE: { 
            return {
                ...state,
                switcher: action.payload
            };
        } 
        default: { 
            return state;
        } 
    } 
}

export interface AppState {
    app: State;
    auth: fromAuth.State
}

export const reducers: ActionReducerMap<AppState> = {
    app: appReducer,
    auth: fromAuth.authReducer
};