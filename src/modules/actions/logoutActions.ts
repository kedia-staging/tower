import {
    LOGOUT_FETCH,
    LOGOUT_FAILURE,
} from '../constants';

export interface LogoutError {
    code?: number;
    message?: string;
}

export interface LogoutFetch {
    type: typeof LOGOUT_FETCH,
}

export interface LogoutFailed {
    type: typeof LOGOUT_FAILURE,
    payload: LogoutError,
}

export type LogoutAction = LogoutFetch | LogoutFailed;

export const logout = (): LogoutFetch => ({
    type: LOGOUT_FETCH,
});

export const logoutError = (payload: LogoutFailed['payload']): LogoutFailed => ({
    type: LOGOUT_FAILURE,
    payload,
});
