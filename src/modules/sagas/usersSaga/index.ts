import { takeLatest } from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_CURRENT_USER_FETCH } from '../../constants';
import { getUsersSaga } from './getUsersSaga';
import { getCurrentUserSaga } from './getCurrentUserSaga';

export function* rootUsersSaga() {
    yield takeLatest(GET_USERS_FETCH, getUsersSaga);
    yield takeLatest(GET_CURRENT_USER_FETCH, getCurrentUserSaga);
}
