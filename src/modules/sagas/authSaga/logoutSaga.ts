import { call, put } from 'redux-saga/effects';
import { logoutError, LogoutFetch } from '../../actions';
import { API } from '../../../api';

export function* logoutSaga(action: LogoutFetch) {
    try {
        yield call(API.delete(), '/api/v2/barong/identity/sessions');
        window.location.replace('/tower/login');
    } catch (error) {
        yield put(logoutError(error));
    }
}
