import {
    DELETE_USER_LABEL_ERROR,
    DELETE_USER_LABEL_FETCH,
} from '../constants';

export interface DeleteLabelError {
    code?: number;
    message?: string;
}

export interface DeleteUserLabelFetch {
    type: typeof DELETE_USER_LABEL_FETCH,
    payload: {
        uid: string,
        key: string,
        scope: string,
    };
}

export interface DeleteUserLabelError {
    type: typeof DELETE_USER_LABEL_ERROR,
    payload: DeleteLabelError,
}


export type DeleteLabelAction = DeleteUserLabelFetch | DeleteUserLabelError;

export const deleteLabel = (payload: DeleteUserLabelFetch['payload']): DeleteUserLabelFetch => ({
    type: DELETE_USER_LABEL_FETCH,
    payload,
});

export const deleteLabelError = (payload: DeleteUserLabelError['payload']): DeleteUserLabelError => ({
    type: DELETE_USER_LABEL_ERROR,
    payload,
});
