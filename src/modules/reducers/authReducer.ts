import { LoginAction, LogoutAction } from '../actions';
import {
    LOGIN_DATA,
    LOGIN_FETCH,
    LOGIN_FAILURE,
    LOGOUT_FETCH,
    LOGOUT_FAILURE,
} from '../constants';

interface UserDataInterface {
  email: string;
  level: number;
  otp: boolean;
  role: string;
  state: string;
  uid: string;
}

export interface AuthState {
    user: UserDataInterface;
    error?: string;
}

type AuthAction = LoginAction | LogoutAction;

export const authReducer = (state = {}, action: AuthAction) => {
    switch (action.type) {
        case LOGIN_FETCH:
            return {
                ...state,
            };
        case LOGIN_DATA:
            return {
                ...state,
                user: action.payload,
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
