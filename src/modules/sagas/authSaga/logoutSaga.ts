import { call, put } from 'redux-saga/effects';
import { logoutError, LogoutFetch } from '../../actions';
import { API } from '../../../api';

export function* logoutSaga(action: LogoutFetch) {
    try {
        document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
        window.location.replace('/tower/login');
        yield call(API.delete(), '/api/v2/barong/identity/sessions');
    } catch (error) {
        yield put(logoutError(error));
    }
}
