import { call, put } from 'redux-saga/effects';
import {
    changeUserOTPError,
    ChangeUserOTPFetch,
} from '../../actions';
import { API } from '../../../api';

export function* changeUserOTPSaga(action: ChangeUserOTPFetch) {
    try {
        yield call(API.put(), `/api/v2/barong/admin/users`, action.payload);
    } catch (error) {
        yield put(changeUserOTPError(error));
    }
}
