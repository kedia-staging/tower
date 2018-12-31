import {
    ADD_USER_LABEL_ERROR,
    ADD_USER_LABEL_FETCH,
} from '../constants';

export interface AddNewUserLabelError {
    code?: number;
    message?: string;
}

export interface AddUserLabelFetch {
    type: typeof ADD_USER_LABEL_FETCH,
    payload: {
        uid: string,
        key: string,
        value: string,
        scope: string,
    };
}

export interface AddUserLabelError {
    type: typeof ADD_USER_LABEL_ERROR,
    payload: AddNewUserLabelError,
}

export type AddNewLabelAction = AddUserLabelFetch | AddUserLabelError;

export const addNewLabel = (payload: AddUserLabelFetch['payload']): AddUserLabelFetch => ({
    type: ADD_USER_LABEL_FETCH,
    payload,
});

export const addNewLabelError = (payload: AddUserLabelError['payload']): AddUserLabelError => ({
    type: ADD_USER_LABEL_ERROR,
    payload,
});
