import {
    CHANGE_USER_ROLE_FETCH,
    CHANGE_USER_ROLE_ERROR,
} from '../constants';

export interface ChangeUserRoleError {
    code?: number;
    message?: string;
}

export interface ChangeUserRoleFetch {
    type: typeof CHANGE_USER_ROLE_FETCH,
    payload: {
        uid: string;
        role: string;
    },
}

export interface ChangeUserRoleFailed {
    type: typeof CHANGE_USER_ROLE_ERROR,
    payload: ChangeUserRoleError,
}

export type ChangeUserRoleAction = ChangeUserRoleFetch | ChangeUserRoleFailed;

export const changeUserRole = (payload: ChangeUserRoleFetch['payload']): ChangeUserRoleFetch => ({
    type: CHANGE_USER_ROLE_FETCH,
    payload,
});

export const changeUserRoleError = (payload: ChangeUserRoleFailed['payload']): ChangeUserRoleFailed => ({
    type: CHANGE_USER_ROLE_ERROR,
    payload,
});
