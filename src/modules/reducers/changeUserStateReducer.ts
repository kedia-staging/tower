import { ChangeUserStateAction } from '../actions';
import {
    CHANGE_USER_STATE_FETCH,
    CHANGE_USER_STATE_ERROR,
} from '../constants';

export interface ChangeUserStateState {
    stateChanged: boolean;
    error?: string;
}

const initial: ChangeUserStateState = {
    stateChanged: false,
};

export const changeUserStateReducer = (state = initial, action: ChangeUserStateAction) => {
    switch (action.type) {
      case CHANGE_USER_STATE_FETCH:
          return {
              ...state,
              stateChanged: true,
          };
      case CHANGE_USER_STATE_ERROR:
          return {
              stateChanged: false,
              error: action.payload.message,
          };
      default:
          return {
              ...state,
          };
    }
}
