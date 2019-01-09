import { takeLatest } from 'redux-saga/effects';
import { LOGIN_FETCH, LOGOUT_FETCH } from '../../constants';
import { loginSaga } from './loginSaga';
import { logoutSaga } from './logoutSaga';

export function* rootAuthSaga() {
    yield takeLatest(LOGIN_FETCH, loginSaga);
    yield takeLatest(LOGOUT_FETCH, logoutSaga);
}
