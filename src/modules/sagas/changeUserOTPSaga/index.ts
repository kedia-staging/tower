import { takeLatest } from 'redux-saga/effects';
import {
    CHANGE_USER_OTP_FETCH,
} from '../../constants';
import { changeUserOTPSaga } from './changeUserOTPSaga';

export function* rootChangeUserOTPSaga() {
    yield takeLatest(CHANGE_USER_OTP_FETCH, changeUserOTPSaga);
}
