import { takeLatest } from 'redux-saga/effects';
import {
    DELETE_USER_LABEL_FETCH,
} from '../../constants';
import { deleteUserLabelSaga } from './deleteUserLabelSaga';

export function* rootDeleteUserLabelSaga() {
    yield takeLatest(DELETE_USER_LABEL_FETCH, deleteUserLabelSaga);
}
