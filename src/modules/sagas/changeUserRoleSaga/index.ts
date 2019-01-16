import { takeLatest } from 'redux-saga/effects';
import {
    CHANGE_USER_ROLE_FETCH,
} from '../../constants';
import { changeUserRoleSaga } from './changeUserRoleSaga';

export function* rootChangeUserRoleSaga() {
    yield takeLatest(CHANGE_USER_ROLE_FETCH, changeUserRoleSaga);
}
