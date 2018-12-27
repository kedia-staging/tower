import { call, put } from 'redux-saga/effects';
import { getCurrentUserData, getCurrentUserError, GetCurrentUserFetch } from '../../actions';
import { API } from '../../../api';

export function* getCurrentUserSaga(action: GetCurrentUserFetch) {
    try {
        const user = yield call(API.get(), '/api/v2/barong/resource/users/me');
        yield put(getCurrentUserData(user));
    } catch (error) {
        yield put(getCurrentUserError(error));
    }
}
