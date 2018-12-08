import { AppState, UsersState } from '../reducers';

export const selectUsers = (state: AppState): UsersState['users'] =>
    state.users.users;

export const selectUsersError = (state: AppState): UsersState['error'] =>
    state.users.error;

export const selectUsersLoading = (state: AppState): UsersState['loading'] =>
    state.users.loading;

export const selectCurrentUser = (state: AppState): UsersState['currentUser'] =>
    state.users.currentUser;
