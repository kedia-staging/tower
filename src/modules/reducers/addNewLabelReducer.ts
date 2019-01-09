import { AddNewLabelAction } from '../actions';
import {
    ADD_USER_LABEL_ERROR,
    ADD_USER_LABEL_FETCH,
} from '../constants';

export interface AddNewLabelState {
    labelAdded: boolean;
    error?: string;
}

const initial: AddNewLabelState = {
    labelAdded: false,
};

export const addNewLabelReducer = (state = initial, action: AddNewLabelAction) => {
    switch (action.type) {
      case ADD_USER_LABEL_FETCH:
          return {
              ...state,
              labelAdded: true,
          };
      case ADD_USER_LABEL_ERROR:
          return {
              labelAdded: false,
              error: action.payload.message,
          };
      default:
          return {
              ...state,
          };
    }
}
