import { call, put } from 'redux-saga/effects';
import { loginError, LoginFetch } from '../../actions';
import { API } from '../../../api';

export function* loginSaga(action: LoginFetch) {
    try {
        yield call(API.post(), '/api/v2/barong/identity/sessions', action.payload);
        // document.cookie = 'session=true; path=/';
        window.location.replace('/tower');
    } catch (error) {
        yield put(loginError(error));
    }
}
