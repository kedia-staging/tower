import {
    GET_CURRENT_USER_FETCH,
    GET_CURRENT_USER_DATA,
    GET_CURRENT_USER_ERROR,
    GET_USERS_FETCH,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
} from '../constants';

export interface GetUsersError {
    code?: number;
    message?: string;
}

export interface UserInterface {
    created_at: string;
    email: string;
    id: number;
    level: number;
    otp: false
    role: string;
    state: string;
    uid: string;
    updated_at: string;
}

export interface GetUsersFetch {
    type: typeof GET_USERS_FETCH,
}

export interface GetUsersSuccess {
    type: typeof GET_USERS_SUCCESS,
    payload: UserInterface[],
}

export interface GetUsersFailed {
    type: typeof GET_USERS_FAILURE,
    payload: GetUsersError,
}

export interface GetCurrentUserFetch {
    type: typeof GET_CURRENT_USER_FETCH,
}

export interface GetCurrentUserData {
    type: typeof GET_CURRENT_USER_DATA,
    payload: UserInterface;
}

export interface GetCurrentUserError {
    type: typeof GET_CURRENT_USER_ERROR,
    payload: GetUsersError,
}

export type UsersAction = GetUsersFetch
    | GetUsersFailed
    | GetUsersSuccess
    | GetCurrentUserFetch
    | GetCurrentUserData
    | GetCurrentUserError;

export const getUsers = (): GetUsersFetch => ({
    type: GET_USERS_FETCH,
});

export const getUsersData = (payload: GetUsersSuccess['payload']): GetUsersSuccess => ({
    type: GET_USERS_SUCCESS,
    payload,
});

export const getUsersError = (payload: GetUsersFailed['payload']): GetUsersFailed => ({
    type: GET_USERS_FAILURE,
    payload,
});

export const getCurrentUser = (): GetCurrentUserFetch => ({
    type: GET_CURRENT_USER_FETCH,
});

export const getCurrentUserData = (payload: GetCurrentUserData['payload']): GetCurrentUserData => ({
    type: GET_CURRENT_USER_DATA,
    payload,
});

export const getCurrentUserError = (payload: GetCurrentUserError['payload']): GetCurrentUserError => ({
    type: GET_CURRENT_USER_ERROR,
    payload,
});
