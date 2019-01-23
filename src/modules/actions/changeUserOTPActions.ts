import {
    CHANGE_USER_OTP_FETCH,
    CHANGE_USER_OTP_ERROR,
} from '../constants';

export interface ChangeUserOTPError {
    code?: number;
    message?: string;
}

export interface ChangeUserOTPFetch {
    type: typeof CHANGE_USER_OTP_FETCH,
    payload: {
        uid: string;
        otp: boolean;
    },
}

export interface ChangeUserOTPFailed {
    type: typeof CHANGE_USER_OTP_ERROR,
    payload: ChangeUserOTPError,
}

export type ChangeUserOTPAction = ChangeUserOTPFetch | ChangeUserOTPFailed;

export const changeUserOTP = (payload: ChangeUserOTPFetch['payload']): ChangeUserOTPFetch => ({
    type: CHANGE_USER_OTP_FETCH,
    payload,
});

export const changeUserOTPError = (payload: ChangeUserOTPFailed['payload']): ChangeUserOTPFailed => ({
    type: CHANGE_USER_OTP_ERROR,
    payload,
});
