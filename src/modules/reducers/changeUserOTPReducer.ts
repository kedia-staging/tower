import { ChangeUserOTPAction } from '../actions';
import {
    CHANGE_USER_OTP_FETCH,
    CHANGE_USER_OTP_ERROR,
} from '../constants';

export interface ChangeUserOTPState {
    OTPChanged: boolean;
    error?: string;
}

const initial: ChangeUserOTPState = {
    OTPChanged: false,
};

export const changeUserOTPReducer = (OTP = initial, action: ChangeUserOTPAction) => {
    switch (action.type) {
      case CHANGE_USER_OTP_FETCH:
          return {
              ...OTP,
              OTPChanged: true,
          };
      case CHANGE_USER_OTP_ERROR:
          return {
              OTPChanged: false,
              error: action.payload.message,
          };
      default:
          return {
              ...OTP,
          };
    }
}
