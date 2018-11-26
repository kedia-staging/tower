export const FETCH_USER_REQUEST = 'user/FETCH_USER';
export const FETCH_USER_SUCCESS = 'user/FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'user/FETCH_USER_ERROR';

export interface UserFetchData {
    type: typeof FETCH_USER_SUCCESS;
    payload: {
        email: string;
    };
}

export type UserActionTypes = UserFetchData;

export const userFetchData = (payload: UserFetchData['payload']): UserFetchData => ({
    type: FETCH_USER_SUCCESS,
    payload,
});
