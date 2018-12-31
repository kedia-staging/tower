import { takeLatest } from 'redux-saga/effects';
import {
    GET_USER_DATA_FETCH,
} from '../../constants';
import { getUserDataSaga } from './getUserDataSaga';

export function* rootGetUserDataSaga() {
    yield takeLatest(GET_USER_DATA_FETCH, getUserDataSaga);
}
