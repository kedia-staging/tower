import { AppState, AuthState } from '../reducers';

export const selectAuthSignedInError = (state: AppState): AuthState['error'] =>
    state.auth.error;
