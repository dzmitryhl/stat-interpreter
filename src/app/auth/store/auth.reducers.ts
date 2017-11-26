import { AuthActions, SIGNUP, SIGNIN, LOGOUT, SET_TOKEN, DECODE_TOKEN_PAYLOAD } from './auth.actions';

export interface State {
    token: string,
    authenticated: boolean,
    userInfo: any
}

const initialState: State = {
    token: null,
    authenticated: false,
    userInfo: null
};

export function authReducer(state = initialState, action: AuthActions) {
    switch(action.type) {
        case SIGNUP:
        case SIGNIN: { 
            return {
                ...state,
                authenticated: true
            };
        }
        case LOGOUT: { 
            return {
                ...state,
                token: null,
                authenticated: false
            };
        }
        case SET_TOKEN: { 
            return {
                ...state,
                token: action.payload
            };
        }
        case DECODE_TOKEN_PAYLOAD: { 
            let base64Url = action.payload.split('.')[1];
            let base64 = base64Url.replace('-', '+').replace('_', '/');

            return {
                ...state,
                userInfo: JSON.parse(window.atob(base64))
            };
        }
        default: { 
            return state;
        } 
    } 
}