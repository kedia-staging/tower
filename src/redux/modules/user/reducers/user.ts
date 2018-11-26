import {
    FETCH_USER_SUCCESS,
    UserActionTypes,
} from '../actions/index';

export interface UserState {
    loggedIn: boolean;
    email: string;
}

const initialState: UserState = {
    loggedIn: false,
    email: '',
};

function user(state = initialState, action: UserActionTypes) {
    switch (action.type) {
        case FETCH_USER_SUCCESS: {
            return {
                loggedIn: true,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}

export {
    user,
};
