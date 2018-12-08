import { LoginAction, LogoutAction } from '../actions';
import {
    LOGIN_FETCH,
    LOGIN_FAILURE,
    LOGOUT_FETCH,
    LOGOUT_FAILURE,
} from '../constants';

export interface AuthState {
    error?: string;
}

type AuthAction = LoginAction | LogoutAction;

export const authReducer = (state = {}, action: AuthAction) => {
    switch (action.type) {
        case LOGIN_FETCH:
            return {
                ...state,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.message,
            };
        case LOGOUT_FETCH:
            return {
                ...state,
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                error: action.payload.message,
            };
        default:
            return {
                ...state,
            };
    }
}
