import { UsersAction, UserInterface } from '../actions';
import {
    GET_CURRENT_USER_FETCH,
    GET_CURRENT_USER_DATA,
    GET_CURRENT_USER_ERROR,
    GET_USERS_FETCH,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
} from '../constants';

export interface UsersState {
    loading: boolean;
    users: UserInterface[];
    currentUser: UserInterface | undefined;
    loadingCurrentUser: boolean;
    error?: string;
}

const initial: UsersState = {
    loading: false,
    currentUser: undefined,
    loadingCurrentUser: false,
    users: [],
}

export const usersReducer = (state = initial, action: UsersAction) => {
    switch (action.type) {
      case GET_USERS_FETCH:
          return {
              ...state,
              loading: true,
          };
      case GET_USERS_SUCCESS:
          return {
              ...state,
              loading: false,
              users: action.payload,
          };
      case GET_USERS_FAILURE:
          return {
              ...state,
              success: false,
              error: action.payload.message,
          };
      case GET_CURRENT_USER_FETCH:
          return {
              ...state,
              loadingCurrentUser: true,
          };
      case GET_CURRENT_USER_DATA:
          return {
              ...state,
              loadingCurrentUser: false,
              currentUser: action.payload,
          };
      case GET_CURRENT_USER_ERROR:
          return {
              ...state,
              loading: false,
              error: action.payload.message,
          };
      default:
          return {
              ...state,
          };
    }
}
