import {
    GET_USER_DATA_ERROR,
    GET_USER_DATA_FETCH,
    GET_USER_DATA_SUCCESS,
} from '../constants';

export interface UserDataError {
    code?: number;
    message?: string;
}

export interface UserDataFetch {
    type: typeof GET_USER_DATA_FETCH,
    payload: {
        uid: string,
    };
}

export interface UserDataSuccess {
    type: typeof GET_USER_DATA_SUCCESS,
    payload: {
        user: any,
    };
}

export interface UserDataError {
    type: typeof GET_USER_DATA_ERROR,
    payload: UserDataError,
}

export type UserDataAction = UserDataFetch
    | UserDataSuccess
    | UserDataError;

export const getUserData = (payload: UserDataFetch['payload']): UserDataFetch => ({
    type: GET_USER_DATA_FETCH,
    payload,
});

export const getUserDataSuccess = (payload: UserDataSuccess['payload']): UserDataSuccess => ({
    type: GET_USER_DATA_SUCCESS,
    payload,
});

export const getUserDataError = (payload: UserDataError['payload']): UserDataError => ({
    type: GET_USER_DATA_ERROR,
    payload,
});
