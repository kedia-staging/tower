// tslint:disable-next-line
import { takeLatest } from 'redux-saga/effects';
import { GET_USER_DATA_FETCH } from '../../constants';
import { getUserDataSaga } from './getUserDataSaga';

export function* rootUserDataSaga() {
    yield takeLatest(GET_USER_DATA_FETCH, getUserDataSaga);
}
