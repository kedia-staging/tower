import { DeleteLabelAction } from '../actions';
import {
    DELETE_USER_LABEL_ERROR,
    DELETE_USER_LABEL_FETCH,
} from '../constants';

export interface DeleteLabelState {
    labelDeleted: boolean;
    error?: string;
}

const initial: DeleteLabelState = {
    labelDeleted: false,
};

export const deleteLabelReducer = (state = initial, action: DeleteLabelAction) => {
    switch (action.type) {
      case DELETE_USER_LABEL_FETCH:
          return {
              ...state,
              labelDeleted: true,
          };
      case DELETE_USER_LABEL_ERROR:
          return {
              labelDeleted: false,
              error: action.payload.message,
          };
      default:
          return {
              ...state,
          };
    }
}
