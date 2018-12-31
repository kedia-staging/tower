import {
    CHANGE_USER_STATE_FETCH,
    CHANGE_USER_STATE_ERROR,
} from '../constants';

export interface ChangeUserStateError {
    code?: number;
    message?: string;
}

export interface ChangeUserStateFetch {
    type: typeof CHANGE_USER_STATE_FETCH,
    payload: {
        uid: string;
        state: string;
    },
}

export interface ChangeUserStateFailed {
    type: typeof CHANGE_USER_STATE_ERROR,
    payload: ChangeUserStateError,
}

export type ChangeUserStateAction = ChangeUserStateFetch | ChangeUserStateFailed;

export const changeUserState = (payload: ChangeUserStateFetch['payload']): ChangeUserStateFetch => ({
    type: CHANGE_USER_STATE_FETCH,
    payload,
});

export const changeUserStateError = (payload: ChangeUserStateFailed['payload']): ChangeUserStateFailed => ({
    type: CHANGE_USER_STATE_ERROR,
    payload,
});
