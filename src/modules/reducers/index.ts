import { combineReducers } from 'redux';
import { authReducer, AuthState } from './authReducer';
import { usersReducer, UsersState } from './usersReducer';
import { userDataReducer, UserDataState } from './userDataReducer';

export * from './authReducer';
export * from './usersReducer';
export * from './userDataReducer';

export interface AppState {
    auth: AuthState;
    users: UsersState;
    selectedUser: UserDataState;
}

export const appReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    selectedUser: userDataReducer,
});
