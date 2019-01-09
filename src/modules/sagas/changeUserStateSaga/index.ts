import { takeLatest } from 'redux-saga/effects';
import {
    CHANGE_USER_STATE_FETCH,
} from '../../constants';
import { changeUserStateSaga } from './changeUserStateSaga';

export function* rootChangeUserStateSaga() {
    yield takeLatest(CHANGE_USER_STATE_FETCH, changeUserStateSaga);
}
