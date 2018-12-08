import { AppState, UserDataState } from '../reducers';

export const selectUserData = (state: AppState): UserDataState['userData'] =>
    state.selectedUser.userData;

export const selectUserDataSuccess = (state: AppState): UserDataState['getUserData'] =>
    state.selectedUser.getUserData;
