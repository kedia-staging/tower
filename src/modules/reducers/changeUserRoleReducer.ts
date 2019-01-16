import { ChangeUserRoleAction } from '../actions';
import {
    CHANGE_USER_ROLE_FETCH,
    CHANGE_USER_ROLE_ERROR,
} from '../constants';

export interface ChangeUserRoleState {
    roleChanged: boolean;
    error?: string;
}

const initial: ChangeUserRoleState = {
    roleChanged: false,
};

export const changeUserRoleReducer = (role = initial, action: ChangeUserRoleAction) => {
    switch (action.type) {
      case CHANGE_USER_ROLE_FETCH:
          return {
              ...role,
              roleChanged: true,
          };
      case CHANGE_USER_ROLE_ERROR:
          return {
              roleChanged: false,
              error: action.payload.message,
          };
      default:
          return {
              ...role,
          };
    }
}
