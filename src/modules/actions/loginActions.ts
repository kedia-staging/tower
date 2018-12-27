import {
    LOGIN_FETCH,
    LOGIN_FAILURE,
} from '../constants';

export interface LoginError {
    code?: number;
    message?: string;
}

export interface LoginFetch {
    type: typeof LOGIN_FETCH,
    payload: {
        email: string,
        password: string,
    };
}

export interface LoginFailed {
    type: typeof LOGIN_FAILURE,
    payload: LoginError,
}

export type LoginAction = LoginFetch | LoginFailed;

export const login = (payload: LoginFetch['payload']): LoginFetch => ({
    type: LOGIN_FETCH,
    payload,
});

export const loginError = (payload: LoginFailed['payload']): LoginFailed => ({
    type: LOGIN_FAILURE,
    payload,
});
