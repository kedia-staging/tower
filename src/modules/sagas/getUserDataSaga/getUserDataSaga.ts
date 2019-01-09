import { call, put } from 'redux-saga/effects';
import {
    getUserDataError,
    getUserDataSuccess,
    UserDataFetch
} from '../../actions';
import { API } from '../../../api';

export function* getUserDataSaga(action: UserDataFetch) {
    try {
        const user = yield call(API.get(), `/api/v2/barong/admin/users/${action.payload.uid}`);
        yield put(getUserDataSuccess(user));
    } catch (error) {
        yield put(getUserDataError(error));
    }
}
